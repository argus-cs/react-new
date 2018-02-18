import { gitApiConn } from '../../core/conn'
import { GIT_REQUEST, GIT_SUCCESS, GIT_FAILURE } from './constants'

export const gitRequest = () => ({
  type: GIT_REQUEST,
})

export const gitSuccess = (data) => ({
  type: GIT_SUCCESS,
  payload: data,
})

export const gitFailure = (error) => ({
  type: GIT_FAILURE,
  errorMessage: error,
})

export const gitFetch = (username) => {
  return (dispatch) => {
    dispatch(gitRequest())
    gitApiConn.get(`users/${username}`)
      .then( res => {
        const {data} = res
        if(res.status !== 200){
          dispatch(gitFailure(res))
        } else {
          dispatch(gitSuccess(data))
        }
      })
  }
}