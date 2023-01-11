import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {legacy_createStore as createStore, combineReducers} from 'redux'
import App from './App'
import noteReducer from './reducers/noteReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

//combinamos reducers
const reducers = combineReducers({
  notes:noteReducer,
})

const store = createStore(reducers, composeWithDevTools())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

