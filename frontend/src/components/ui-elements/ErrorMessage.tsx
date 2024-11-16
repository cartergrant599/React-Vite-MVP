import React from 'react';

interface ErrorMessageProps {
  message: string;
  type: "success" | "error";
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, type }) => (
  <div role="alert" className={`rounded mb-4 border-s-4 ${type === "success" ? "border-success bg-green-50" : "border-error bg-red-50"} p-4`}>
    <p className={`text-sm ${type === "success" ? "text-success" : "text-error"}`}>
      {message}
    </p>
  </div>
);

export default ErrorMessage;