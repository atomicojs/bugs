import { c, useRef } from "atomico";
import html from "atomico/html";
import { useSlot } from "@atomico/hooks/use-slot";

function component() {
  const ref = useRef();
  const slots = useSlot(ref);
  console.log(slots);
  return html`<host shadowDom>
    <slot ref=${ref}></slot>
  </host>`;
}

customElements.define("my-component", c(component));
