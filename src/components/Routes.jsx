import React from 'react'

import {Switch, Redirect, Route } from 'react-router-dom'
import  Results  from './Results'

export const Routes = () => {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search"/>
                </Route>
                <Route exact path={["/search","/news","/images","/videos"]}>
                    <Results />
                </Route>
            </Switch>
        </div>
    )
}

