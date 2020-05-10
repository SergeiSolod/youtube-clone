import React from "react";

export const Input = React.memo(({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError ? "div-input-error-true" : "div-input-error"}>
      {hasError && (
        <div className="div-error-span">
          <span className="error-info-message"> {meta.error}</span>
        </div>
      )}
      <div>
        <input
          {...input}
          {...props}
          className={hasError ? "input-error" : "js-input input "}
        />
      </div>
    </div>
  );
});
