import React, { Component } from 'react';
import { reduxForm, Field  } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name }, idx) => {
      return (
        <Field
          key={idx}
          component={SurveyField}
          type='text'
          label={label}
          name={name}
        />
      )
    })
  }

  render() {
    const {
      onSurveySubmit,
      handleSubmit
    } = this.props;

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Survey Form</h1>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button
            className='teal btn-flat right white-text' type='submit'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  let errors = {}

  errors.recipients = validateEmails(values.recipients || '')

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `${name} is required.`
    }
  })

  return errors
}

export default reduxForm({
  // validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)
