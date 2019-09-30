import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Header from "./Header";

export default { title: "Header", decorators: [withKnobs] };

export const plain = () => <Header>Hello, World!</Header>;

export const withColor = () => {
  const color = text("Color", "red");

  return <Header color={color}>Hello, World!</Header>;
};
