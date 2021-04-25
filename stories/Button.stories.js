import { Button } from "./Button";

export default {
  title: "Example/Button",
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
  },
};

customElements.define("my-button", Button);

export const Primary = () => `<my-button>
  <p>Slot 1</p>
  <p>Slot 2</p>
</my-button>`;
