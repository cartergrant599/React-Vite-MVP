import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = "button", onClick, disabled, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white"
    >
      {children}
    </button>
  );
};

export default Button; 