import React from "react";

function ErrorMessage({ message }) {
  console.log("Sss");
  return (
    <p className="error">
      <span>🛑️</span> {message}
    </p>
  );
}

export default ErrorMessage;
