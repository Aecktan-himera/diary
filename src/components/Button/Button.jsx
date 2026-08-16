import "./Button.css";
import { useState } from "react";

const Button = () => {
  const [text, setText] = useState("Сохранить");

  const clicked = () => {
    setText("Закрыть");
    //000000setText((t) => t + "!");
    console.log("Привет!");
  };
  return (
    <button onClick={clicked} className="button accent">
      {text}
    </button>
  );
};

export default Button;
