import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {store} from './App'

const renderApp = () => {
return ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
}
renderApp()
store.subscribe(renderApp)
