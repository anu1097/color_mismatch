import React from "react";

export const Options = (props) => {
    let {onClick} = props;
    let buttonDivStyle = {
        flex:6,
        margin:"10px"
    };
    let buttonStyle = {
        width: '100%',
        border:0,
        padding:"5px",
        backgroundColor:"white",
        borderBottom:"1px solid lightgrey",
        boxShadow:"0.5px 2px 1px lightgrey"
    };
    let optionsStyle = {
        flex: 1.5,
        display:"flex",
        justifyContent:"space-between",
    };
    return (
        <div style={optionsStyle}>
            {
                ["NO", "YES"].map((item, index) => {
                    return (
                        <div style={buttonDivStyle}>
                            <button
                                id={item}
                                key={index}
                                style={buttonStyle}
                                onClick={(event) => onClick(event.target.id === "YES",)}
                            >
                                {item}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
};