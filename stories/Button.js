import { c, useRef } from "atomico";
import html from "atomico/html";
import { useSlot } from "@atomico/hooks/use-slot";

function button() {
  const ref = useRef();
  const childNodes = useSlot(ref);

  return html`<host shadowDom>
    content...
    <slot ref=${ref}></slot>
  </host>`;
}

export const Button = c(button);
