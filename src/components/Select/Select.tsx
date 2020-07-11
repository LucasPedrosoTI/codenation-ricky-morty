import React from "react";
import "./Select.css";

interface SelectProps {
  options: number[];
  handleChange: any;
}

export const Select = ({ options, handleChange }: SelectProps) => (
  <select className="select" onChange={(e) => handleChange(e.target.value)}>
    <option defaultValue="Selecione um episódio">Selecione um episódio</option>
    {options.map((option) => (
      <option value={option} key={option}>
        {option}
      </option>
    ))}
  </select>
);
