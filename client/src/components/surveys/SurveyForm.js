import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    errorMessage: "Please title your survey!",
  },
  {
    label: "Subject Line",
    name: "subject",
    errorMessage: "Your survey email needs a subject line!",
  },
  {
    label: "Email Body",
    name: "body",
    errorMessage: "You can't send a blank survey!",
  },
  {
    label: "Recipient List",
    name: "emails",
    placeholder: "user@email.com, user2@email.com, user3@email.com",
    errorMessage: "Recipient list must be a comma separated list!",
  },
];

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {FIELDS.map((field) => (
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
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}>
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
  errors.emails = validateEmails(values.emails || "");
  FIELDS.forEach(({ name, errorMessage }) => {
    if (!values[name]) {
      errors[name] = errorMessage;
    }
  });

  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate,
})(SurveyForm);
