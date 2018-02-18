import { GIT_REQUEST, GIT_SUCCESS, GIT_FAILURE } from './constants'

const initialState = {
  isFetching: true,
  error: null,
  data: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case GIT_REQUEST:
    return { ...state,
      isFetching: true,
    }
  
  case GIT_SUCCESS:
    return { ...state,
      isFetching: false,
      data: action.payload,
    }

  case GIT_FAILURE:
    return { ...state,
      isFetching: false,
      error: action.errorMessage,
    }

  default:
    return state
  }
}
