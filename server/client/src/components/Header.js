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
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
            <li>
              <a href="/auth/github">Login with Github</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul id="nav-mobile" className="right">
            <li>
              <Payments />
            </li>
            <li style={{ margin: "0 5px 0 10px" }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            FC
          </Link>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
