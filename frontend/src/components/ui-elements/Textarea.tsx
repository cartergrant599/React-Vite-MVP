import React from "react";

interface TextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows?: number;
  error?: string;
  onErrorClear?: () => void; 
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
  error,
  onErrorClear,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className={`w-full resize-none focus:border-transparent focus:outline-none focus:ring-0 text-slate-800 p-3 ${
            error ? "focus:ring-error" : ""
          }`}
          rows={rows}
          placeholder={placeholder}
        ></textarea>
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

export default Textarea;
