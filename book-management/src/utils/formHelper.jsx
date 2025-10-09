 const renderError = (errors, fieldName, customMessages = {}) => {
  const error = errors[fieldName];
  if (!error) return null;

  const messages = {
    required: "This field is required",
    minLength: `Must be at least ${error.message} characters`,
    maxLength: `Must be no more than ${error.message} characters`,
    pattern: error.message,
    ...customMessages, // overrides default ones
  };

  return (
    <span className="text-red-500 text-sm mt-1">
      {messages[error.type] || "Invalid value"}
    </span>
  );
};

 const getErrorClass = (error) =>
  error ? "border-red-500" : "";


export {renderError, getErrorClass}
