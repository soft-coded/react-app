import React from "react"
import NewNote from "./components/NewNote"
import Footer from "./components/Footer"

function Notes(){
    return <main>
        <link rel="stylesheet" href="css/notes.css"/>
        <NewNote />
        <Footer />
    </main>
}

export default Notes