import { combineReducers } from 'redux'
import getUserByIdReducer from './getUserByIdReducer'

const reducers = combineReducers({
  getUserByIdState: getUserByIdReducer,
})

export default reducers
