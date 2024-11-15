import React from "react";

interface TextInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
}) => (
  <label
    htmlFor={id}
    className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
  >
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="peer border-none h-10 px-3 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-slate-800"
      placeholder={placeholder}
    />
    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-sm text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </span>
  </label>
);

export default TextInput;
