import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  // React.createElement("div", { className: "App" }, [
  //   React.createElement(Header, {}, "Hello, World!"),
  //   React.createElement(
  //     Counter,
  //     {
  //       value: counterValue,
  //       step: 10,
  //       onChange: newValue => setCounterValue(newValue)
  //     },
  //     null
  //   ),
  //   React.createElement(Header, { color: "green" }, "Hello, Class!")
  // ]);

  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="App">
      <Header>Hello, World!</Header>
      <Counter
        value={counterValue}
        step={10}
        onChange={newValue => setCounterValue(newValue)}
      />
      <Header color="green">Hello, Class!</Header>
    </div>
  );
}

export default App;
