import React from "react";
let renderInput = ({
  input,
  type,
  label,
  style,
  meta: { error, warning, touched }
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...input} style={style} type={type} className="form-control" />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
    </div>
  );
};

let renderRadioInput = ({
  input,
  options,
  label,
  value,
  meta: { error, touched }
}) => {
  return (
    <div className="form-group">
      <label htmlFor="label">{label}</label>

      {Object.keys(options).map(key => {
        return (
          <div className="form-check" key={key}>
            <input
              {...input}
              checked={input.value == key ? true : false}
              className="form-check-input"
              type="radio"
              id={key}
              value={key}
            />
            <label className="form-check-label" htmlFor={key}>
              {options[key].label}
            </label>
          </div>
        );
      })}
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  );
};

let renderSelect = ({ input, label, children, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label htmlFor="label">{label}</label>
      <select className="form-control" {...input}>
        {children}
      </select>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default { renderInput, renderRadioInput, renderSelect };
