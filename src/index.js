import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './App'
import { ResultContextProvider } from './contexts/ResultContextProvider'
import './global.css'

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <Route path="/">
        <App />
      </Route>
    </Router>
  </ResultContextProvider>,
  document.getElementById('root'),
)
