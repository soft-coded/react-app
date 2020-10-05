import React, { useState } from "react"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import $ from "jquery"

function Card(props){
    const [hovered,setHover]=useState(false)
    function mouseover(e){
        setHover(true)
        $(e.target).children(".arrow").fadeIn(300).css("display","flex")
    }
    function mouseout(e){
        $(e.target).children(".arrow").fadeOut(300)
        setHover(false)
    }
    return <a onMouseEnter={mouseover} onMouseLeave={mouseout} href={props.link} className={`land-card ${hovered?props.hoverClass:""}`}>
        <h2 className="land-card-title">{props.title}</h2>
        <p className="land-card-desc">{props.desc}</p>
        <div className="arrow"><span className="create">Create</span> <DoubleArrowIcon style={{fontSize: "4rem"}}/></div>
    </a>
}

export default Card