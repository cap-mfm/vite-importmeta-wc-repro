import { build } from "vite";
import { glob } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rimraf } from "rimraf";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import externalGlobals from "rollup-plugin-external-globals";

async function buildPackages() {
  await rimraf("./dist/");

  const inputFiles = Object.fromEntries(
    glob
      .sync("src/**/*.entry.tsx")
      .map((file) => [
        path.relative(
          "src",
          file.slice(0, file.length - path.extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url)),
      ])
  );

  for (const key in inputFiles) {
    const inputFile = inputFiles[key];

    console.log("Building", inputFile, "...");

    await build({
      appType: "custom",
      publicDir: false,
      css: { modules: { scopeBehaviour: "local", exportGlobals: false } },
      build: {
        cssCodeSplit: false,
        watch: false,
        minify: true,
        sourcemap: false,
        cssMinify: true,
        outDir: "dist",
        rollupOptions: {
          input: inputFile,
          external: ["react", "react-dom"],
          output: {
            entryFileNames: (chunkInfo) =>
              `webcomponents/${chunkInfo.name.replace(".entry", "")}.js`,
            noConflict: true,
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
          plugins: [
            react(),
            typescript({ noEmit: true, allowImportingTsExtensions: true }),
            externalGlobals({
              react: "React",
              "react-dom": "ReactDOM",
            }),
          ],
        },
        emptyOutDir: false,
      },
      configFile: false,
    });
  }
}

buildPackages();
