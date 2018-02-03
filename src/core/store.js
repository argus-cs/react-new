import { createStore, applyMiddleware } from 'redux'

// import redux middleware
import thunk from 'redux-thunk'
import promise from 'redux-promise'

// import root reducers
import Reducers from './reducers'

// devtools
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Centralized application state
const store = applyMiddleware(thunk, promise)(createStore)(Reducers, devtools);

export default store;