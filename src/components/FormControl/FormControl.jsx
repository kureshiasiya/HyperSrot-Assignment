import React from "react";
import { formGroup, Input, Label, formfeedback } from "reactstrap";
const FormControl = (props) => {
  const { label, type, error, handleChange, value } = props;
  const name = label.toLowerCase();
  return (
    <formGroup>
      <Label for={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        invalid={!!error}
        onChange={handleChange}
        value={value}
      />

      <formfeedback>{error}</formfeedback>
    </formGroup>
  );
};
export default FormControl;
