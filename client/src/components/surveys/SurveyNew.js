import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends Component {

  state = {
    showFormReview: false
  }

  handleShowFormReview = () => {
    this.setState(prevState => ({
      showFormReview: !prevState.showFormReview
    }))
  }

  renderContent = () => {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview 
          onCancel={this.handleShowFormReview}
        />
      )
    } 
    return (
      <SurveyForm
        onSurveySubmit={this.handleShowFormReview}
      />
    )
  }
  
  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
