import React, { useState } from "react"

function NewNote(){
    const [clicked,setClick]=useState(false)
    function clck(e){
        setClick(true)
    }

    return <div className="new-note" onClick={clck}>
        <input className="in-title" placeholder={clicked?"Title":"Take a note"} ></input>
        {clicked && <textarea placeholder="Content"></textarea>}
    </div>
}

export default NewNote