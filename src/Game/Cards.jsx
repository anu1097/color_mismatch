import React from "react"

const Card = (props)=>{
    let {colorName, colorStyle} = props.value;
    const cardStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px lightgrey solid",
        width:"25vh",
        height:"15vh",
        padding: "15px",
        boxShadow: ".0.5px 2px 0.5px lightgrey",
        margin:"15px auto",
        color:colorStyle,
        fontWeight:"bold",
        fontSize:"7.5vh"
    };
    return(
        <div style={cardStyle}>
            {colorName}
        </div>
    )
};

export default Card;

