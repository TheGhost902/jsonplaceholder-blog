import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './root.reducer'

export default createStore(rootReducer, applyMiddleware(ReduxThunk))