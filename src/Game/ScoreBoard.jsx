import React from "react";

const scoreArea = {
    flexGrow: "2",
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"Column",
    margin: "0 20px",
    height:"90vh",
    border: "1px solid",
    borderRadius: "10px",
    highScores: {
        fontWeight: "bold",
        padding:"10px",
        borderRadius: "10px 10px 0 0",
        backgroundColor: "#E4E8FF",
    }
};

export default class ScoreBoard extends React.Component{

    render(){
        let {highScores} = this.props;
        return(
            <div style={scoreArea}>
                <div>
                    <div style={scoreArea.highScores}>
                        HighScores
                    </div>
                    <div style={{padding:"10px"}}>
                        {highScores && highScores.map((item,index)=>{
                            let fontWeight =(index===0)?{fontWeight:"bold"}:{};
                            return(
                                <div key={index} style={{display:"flex",justifyContent:"space-between"}}>
                                    <p style={{margin:0, padding:"5px"}}>{item.playerName}</p>
                                    <p style={{...fontWeight,margin:0, padding:"5px"}}>{item.score}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}