import React from "react";

const Button = ({
  type = "button",
  disabled = false,
  isLoading = false,
  loadingText = "Processing...",
  children,
  className = "",
  ...props
}) => {
  const baseClasses = "text-white text-2xl w-full py-3 rounded-2xl mt-5 max-w-177 mx-auto block cursor-pointer";
  const gradientClasses = "bg-gradient-to-r from-primary-light to-primary-dark";
  const disabledClasses = "disabled:opacity-70 disabled:cursor-not-allowed";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${gradientClasses} ${disabledClasses} ${className}`}
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;