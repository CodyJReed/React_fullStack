import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onEdit, formValues, submitSurvey, history }) => {
  const reviewList = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewList}
      <div
        style={{
          marginTop: "5px",
          borderTop: "1px solid grey",
          paddingTop: "15px"
        }}
      >
        <button
          className="yellow darken-3 btn-flat white-text"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="teal btn-flat right white-text"
          onClick={() => submitSurvey(formValues, history)}
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
