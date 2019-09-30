import React from "react";
import "./Header.css";

const Header = ({ children, color = "black" }) => {
  return <h1 style={{ color }}>{children}</h1>;
};

export default Header;
