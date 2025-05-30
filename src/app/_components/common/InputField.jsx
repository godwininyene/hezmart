const InputField = ({
    register,
    name,
    classNames = "",
    type = "text",
    placeholder,
    defaultValue = "",
    isRequired = true,
    onChange,
    variant = "default",
    label,
    icon,
    error,
    as = "input",
  }) => {
    const baseStyles = "w-full py-3 px-4 transition-all duration-200 focus:outline-none";
    
    const variants = {
      default: "border-1 border-solid border-[#D9E1EC] rounded-lg placeholder-[#A1A7C4] text-black focus:border-primary-light",
      outline: "border-b-2 border-gray-300 bg-transparent focus:border-blue-500",
      filled: "bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500",
      floating: "border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    };
  
    const inputClasses = `${baseStyles} ${variants[variant] || variants.default} ${classNames}`;
    
    const InputComponent = as === "textarea" ? "textarea" : "input";
  
    return (
      <div className="relative">
        {label && (
          <label htmlFor={name} className="block text-md text-[#5A607F] mb-1">
            {label}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          <InputComponent
            type={type}
            id={name}
            {...register(name)}
            placeholder={placeholder}
            className={inputClasses}
            required={isRequired}
            // onChange={onChange}
            rows={as === "textarea" ? 3 : undefined}
          />
          {icon && <div className="absolute right-3 top-3.5 text-gray-400">{icon}</div>}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  };
  
  export default InputField;