import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Counter from ".";

export default { title: "Counter", decorators: [withKnobs] };

export const plain = () => {
  const step = number("Step", 1);
  const initialValue = number("Initial Value", 0);

  return (
    <Counter
      step={step}
      value={initialValue}
      onChange={action("counter-changed")}
    />
  );
};

// const Contollerd = () => {
//   const [text, setText] = useState("");

//   return (
//     <input type="text" value={text} onChange={e => setText(e.target.value)} />
//   );
// };
