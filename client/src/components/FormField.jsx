import React from "react";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  return (
    <label htmlFor="" className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epiloue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none"
        />
      )}
    </label>
  );
};

export default FormField;
