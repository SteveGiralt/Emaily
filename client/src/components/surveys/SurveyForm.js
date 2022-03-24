import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {formFields.map((field) => (
          <Field
            key={field.name}
            type="text"
            {...field}
            component={SurveyField}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <button
            className="btn-flat right white-text teal darken-2"
            type="submit">
            Next<i className="material-icons right">arrow_forward</i>
          </button>
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel<i className="material-icons right">cancel</i>
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  formFields.forEach(({ name, errorMessage }) => {
    if (!values[name]) {
      errors[name] = errorMessage;
    }
  });

  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false,
})(SurveyForm);
