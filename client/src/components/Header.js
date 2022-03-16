import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments />
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo left">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
