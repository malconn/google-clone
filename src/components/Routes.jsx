import React from 'react'

import {BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import Results from './Results'

export const Routers = () => {
  return (
    <div className="p-4">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Navigate to="/search" />
          </Route>
          <Route exact path={['/search', '/news', '/images', '/videos']}>
            <Results />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
