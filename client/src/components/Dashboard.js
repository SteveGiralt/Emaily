import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends Component {
  renderContent() {
    if (!this.props.auth) {
      return;
    } else {
      switch (this.props.auth.credits) {
        case null:
          return;
        case 0:
          return (
            <div>
              <div className="fixed-action-btn">
                <Link
                  to="/pricing"
                  className="right btn-floating btn-large red">
                  <i className="large material-icons">attach_money</i>
                </Link>
              </div>
            </div>
          );
        default:
          return (
            <div>
              <div className="fixed-action-btn">
                <Link
                  to="/surveys/new"
                  className="right btn-floating btn-large red">
                  <i className="large material-icons">mode_edit</i>
                </Link>
              </div>
            </div>
          );
      }
    }
  }

  render() {
    return (
      <div>
        <SurveyList />
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
