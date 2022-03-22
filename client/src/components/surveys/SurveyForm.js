import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" },
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
  if (!values.title) {
    errors.title = "You must provide a title";
  }
  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate,
})(SurveyForm);
