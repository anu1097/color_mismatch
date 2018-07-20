import React from "react";
import Card from "./Cards";

export default class QueCards extends React.Component{

    render(){
        const queCardsStyle={
            flex:8.5,
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
        };
        let {question, answer} = this.props;
        return(
            <div style={queCardsStyle}>
                <Card value={question}/>
                <Card value={answer}/>
            </div>
        );
    }
}