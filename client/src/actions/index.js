import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => {
  return async (dispatch) => {
    let resp = await axios.get('/api/current_user')
    dispatch({
      type: FETCH_USER,
      payload: resp.data
    })
  }
}

export const handleToken = (token) => {
  return async (dispatch) => {
    //debugger
    let resp = await axios.post('/api/stripe', token)
    dispatch({
      type: FETCH_USER,
      payload: resp.data
    })
  }
}
