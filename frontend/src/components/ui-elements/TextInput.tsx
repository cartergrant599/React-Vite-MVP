import React from "react";

interface TextInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  onErrorClear?: () => void; 
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  onErrorClear,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onErrorClear) {
      onErrorClear();
    }
    onChange(e);
  };

  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className={`relative block rounded-md border shadow-sm ${
          error ? "border-error ring-1 ring-error" : "border-gray-200"
        } focus-within:border-primary focus-within:ring-1 focus-within:ring-primary`}
      >
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className={`peer border-none h-10 px-3 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-slate-800 ${
            error ? "focus:ring-error" : ""
          }`}
          placeholder={placeholder}
        />
        <span
          className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-sm transition-all ${
            error
              ? "text-error"
              : "text-gray-700 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
          }`}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </span>
      </label>
      {error && <p className="text-error text-xs">{error}</p>}
    </div>
  );
};

export default TextInput;
