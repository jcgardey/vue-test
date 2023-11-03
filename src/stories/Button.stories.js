import MyButton from "./Button.vue";

export default {
  title: "Ejemplos/Button",
  component: MyButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "radio",
    },
  },
};

export const Primary = {
  args: {
    label: "Button Test",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: "Button Test",
    variant: "secondary",
  },
};
