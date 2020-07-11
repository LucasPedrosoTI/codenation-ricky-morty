import React from "react";
import "./Select.css";

import { SelectProps } from "../../interfaces/interfaces";

export const Select = ({
  options,
  handleChange,
  filterFunction,
  rawData,
  setStateFunction,
}: SelectProps) => (
  <select
    className="select"
    onChange={(e) =>
      handleChange(e, e.target.value, filterFunction, rawData, setStateFunction)
    }
  >
    <option defaultValue="" value="">
      Selecione um episódio
    </option>
    {options.map((option) => (
      <option value={option} key={option}>
        {option}
      </option>
    ))}
  </select>
);
