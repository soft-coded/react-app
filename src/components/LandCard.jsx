import React from "react"

function Card(props){
    return <a href={props.link} className="land-card">
        <h2 className="land-card-title">{props.title}</h2>
        <p className="land-card-desc">{props.desc}</p>
    </a>
}

export default Card