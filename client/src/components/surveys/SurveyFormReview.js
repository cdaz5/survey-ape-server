import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import map from 'lodash/map';
import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  })

  return (
    <div>
      <h5>Please Confirm Your Entries</h5>
      <div>
        { reviewFields }
      </div>
      <button
        className='yellow darken-3 btn-flat'
        onClick={onCancel}
      > 
        Back
      </button>
      <button
        className='green btn-flat right white-text'
        onClick={(values) => submitSurvey(formValues, history)}
      >
        Send Survey 
        <i className='material-icons right'>email</i>
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
})

export default connect(mapStateToProps,
  actions
)(withRouter(SurveyFormReview));