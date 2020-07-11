import React from "react";
import "./Button.css";

interface ButtonProps {
  name: string;
  handleClick: any;
}
export const Button = ({ name, handleClick }: ButtonProps) => {
  return (
    <>
      <button onClick={handleClick} className="btn btn-secondary">
        {name}
      </button>
    </>
  );
};
