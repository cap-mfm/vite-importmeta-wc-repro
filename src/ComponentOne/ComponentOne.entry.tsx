import React from "react";
import ReactDom from "react-dom/client";

import { ComponentOne } from "./ComponentOne";

export function defineComponentOneEntry() {
  class ComponentOneEntry extends HTMLElement {
    public static WebcomponentName = "component-one";

    mountPoint!: HTMLDivElement;

    constructor() {
      super();
    }

    connectedCallback() {
      this.mountPoint = document.createElement("div");

      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.appendChild(this.mountPoint);

      ReactDom.createRoot(this.mountPoint).render(<ComponentOne />);
    }
  }

  window.customElements.get(ComponentOneEntry.WebcomponentName) ||
    window.customElements.define(
      ComponentOneEntry.WebcomponentName,
      ComponentOneEntry
    );
}

defineComponentOneEntry();
