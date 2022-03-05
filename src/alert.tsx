import { Component, c } from "atomico";

const alert: Component<{ name: string; random: boolean }> = (props) => {
  return (
    <host shadowDom>
      <h1>Hello {props.name}</h1>
    </host>
  );
};

alert.props = {
  name: {
    type: String,
  },
  random: Boolean,
};

export const Alert = c(alert);

customElements.define("my-alert", Alert);
