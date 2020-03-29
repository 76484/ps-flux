import React from "react";
import PropTypes from "prop-types";

function TextInput({ error, id, label, name, onChange, value }) {
  let wrapperClass = "form-group";

  if (error.length) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <input
          type="text"
          id={id}
          name={name}
          onChange={onChange}
          className="form-control"
          value={value}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

TextInput.defaultProps = {
  error: ""
};

export default TextInput;
