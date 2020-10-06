import React, { useState } from "react"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import $ from "jquery"
import {Link} from "react-router-dom"

function Card(props){
    const [hovered,setHover]=useState(false)
    function mouseover(e){
        $(e.target).find(".arrow").fadeIn(300).css("display","flex")
        setHover(true)
    }
    function mouseout(e){
        $(e.target).find(".arrow").fadeOut(300)
        setHover(false)
    }
    return <div onMouseEnter={mouseover} onMouseLeave={mouseout} className={`land-card ${hovered?props.hoverClass:""}`}>
        <Link to={props.link}>
            <h2 className="land-card-title">{props.title}</h2>
            <p className="land-card-desc">{props.desc}</p>
            <div className="arrow"><span className="create">Create</span> <DoubleArrowIcon style={{fontSize: "4rem"}}/></div>
        </Link>
    </div>
}

export default Card