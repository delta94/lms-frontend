import React from "react";

const Input = ({ name, type = "text", onChange, value, placeholder }) => (
  <>
    <label htmlFor="name">{name.toUpperCase()}</label>
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </>
);

export default Input;
