import React from "react";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { reviewSurvey } from "../actions";
import { connect } from "react-redux";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error red-text">{meta.error}</div>
      ) : null}
    </>
  );
};

const SurveyForm = ({ survey, reviewSurvey, setShowReview }) => {
  return (
    <React.Fragment>
      <h3>Submit a survey!</h3>
      <Formik
        initialValues={{
          title: survey?.title || "",
          subject: survey?.subject || "",
          body: survey?.body || "",
          recipients: survey?.recipients || "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required(
            "Give your survey a memorable name (so you can find it later!)"
          ),
          subject: Yup.string().required("Your email needs a subject line!"),
          body: Yup.string().required("Your email needs some content!"),
          recipients: Yup.array()
            .transform(function (value, originalValue) {
              if (this.isType(value) && value !== null) {
                return value;
              }
              return originalValue ? originalValue.split(/[\s,]+/) : [];
            })
            .of(
              Yup.string().email(({ value }) => `${value} is not a valid email`)
            ),
        })}
        onSubmit={(values) => {
          reviewSurvey(values);
          setShowReview(true);
        }}
        validateOnChange={false}>
        <Form>
          <MyTextInput
            label="Survey Title"
            name="title"
            type="text"
            placeholder=""
          />
          <MyTextInput
            label="Subject Line"
            name="subject"
            type="text"
            placeholder=""
          />
          <MyTextInput
            label="Email Body"
            name="body"
            type="text"
            placeholder=""
          />
          <MyTextInput
            label="Recipient List"
            name="recipients"
            type="text"
            placeholder=""
          />
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Submit<i className="material-icons right">done</i>
          </button>
        </Form>
      </Formik>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return { survey: state.survey };
}

export default connect(mapStateToProps, { reviewSurvey })(SurveyForm);
