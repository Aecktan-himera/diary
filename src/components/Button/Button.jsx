import "./Button.css";
import { useState } from "react";

const Button = ({ text }) => {
  return <button className="button accent">{text}</button>;
};

export default Button;
