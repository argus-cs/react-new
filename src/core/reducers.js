import { combineReducers } from 'redux'

// import reducer's
import git from '../actions/Home/reducers'

const rootReducers = combineReducers({
  //instacias dos reducers
  git,
})

export default rootReducers