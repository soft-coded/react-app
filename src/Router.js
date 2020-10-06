import React from "react"
import {Switch, Route} from "react-router-dom"

import Notes from "./Notes"
import App from "./App"

function Router(){
    return <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/notes" component={Notes}/>
    </Switch>
}

export default Router