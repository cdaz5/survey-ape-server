import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => {
  return async (dispatch) => {
    const resp = await axios.get('/api/current_user')
    dispatch({
      type: FETCH_USER,
      payload: resp.data
    })
  }
}

export const handleToken = (token) => {
  return async (dispatch) => {
    //debugger
    const resp = await axios.post('/api/stripe', token)
    dispatch({
      type: FETCH_USER,
      payload: resp.data
    })
  }
}

export const submitSurvey = (values, history) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post('/api/surveys', values)
      history.push('/surveys')
      dispatch({
        type: FETCH_USER,
        payload: resp.data
      })
    } catch (error) {
      dispatch({
        type: 'SUBMIT_SURVEY_FAILURE'
      })
    }
  }
}
