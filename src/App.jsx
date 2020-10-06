import React from "react"
import Heading from "./components/Heading"
import Footer from "./components/Footer"
import LandCard from "./components/LandCard"

function App(){
    return <section className="inner land-sec">
        <Heading />
        <div className="flex">
            <LandCard hoverClass="notes-hover" link="/notes" title="Notes" desc="Click here to make some notes" />
            <LandCard hoverClass="todo-hover" link="/todo" title="To-do" desc="Click here to create a to-do list" />
        </div>
        <Footer />
    </section>
}

export default App