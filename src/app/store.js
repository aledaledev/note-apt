import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import noteReducer from '../reducers/noteReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//combinamos reducers
const reducers = combineReducers({
    notes:noteReducer,
  })
  
export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

//otra forma de acceder a la store
//const store = useStore()
//const state = store.getState()
//store.dispatch(action())

