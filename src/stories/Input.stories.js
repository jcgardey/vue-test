import Input from "./Input.vue";

export default {
  title: "Ejemplos/Input",
  component: Input,
};

export const Primary = {
  args: {
    placeholder: "Input Test",
    error: false,
    value: "",
  },
};

export const Error = {
  args: {
    placeholder: "Input Test",
    error: true,
    value: "",
  },
};
