import React from "react";
import "./Label.css";

interface LabelProps {
  label: string;
}

export const Label = ({ label }: LabelProps) => (
  <label className="label" htmlFor="">
    {label}
  </label>
);
