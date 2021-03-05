import React from "react";

interface InputProps {
  placeholder?: string;
  style?: object;
  onChange?: () => void; 
}

const Input = ({ placeholder, style = {}, onChange }: InputProps) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        style={style}
        className="px-5 py-3 lg:px-7 lg:py-5 rounded-4xl text-brown-dark placeholder-brown-dark text-md lg:text-lg font-medium hidden md:block w-full"
        onChange={onChange}
      />
    </>
  );
};

export default Input;
