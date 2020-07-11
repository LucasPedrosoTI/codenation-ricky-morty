import React from "react";
import "./Button.css";

interface ButtonProps {
  name: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
