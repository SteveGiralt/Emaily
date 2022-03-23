import React from "react";

const SurveyField = ({
  input,
  label,
  placeholder,
  meta: { error, touched },
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        placeholder={placeholder}
        style={{ marginBottom: "5px" }}
      />
      <div className="red-text darken-4" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
