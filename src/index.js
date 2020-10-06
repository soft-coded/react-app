import React from "react"
import Reactdom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import Route from "./Router"

Reactdom.render(<BrowserRouter><Route /></BrowserRouter>,document.getElementById("root"))