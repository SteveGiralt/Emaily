import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1" key={survey._id}>
              <div className="card-content white-text">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <p className="right">
                  Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <button
                  className="btn-flat teal lighten-2"
                  style={{ marginRight: "15px", cursor: "default" }}>
                  Yes: {survey.yes}
                </button>
                <button
                  className="btn-flat teal lighten-2"
                  style={{ cursor: "default" }}>
                  No: {survey.no}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
