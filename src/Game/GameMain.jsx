import React from "react"
import GameArea from "./GameArea";
import ScoreBoard from "./ScoreBoard";

const gameMain = {
    display:"flex",
    padding: "30px 20px"
};

export default class GameMain extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPlayerName:"",
            currentScore:""
        }
    }

    componentWillMount() {
        let localStorage = window.localStorage;
        if(localStorage && localStorage["highScores"]){
            this.setState({
                highScores:JSON.parse(localStorage["highScores"])
            })
        }
    }

    changeScore = (scoreUpdate)=>{
        let score = this.state.currentScore+scoreUpdate;
        this.setState({
            currentScore:score
        })
    };

    restartGame = () =>{
        let highScores = [];
        if(this.state.highScores) highScores = this.state.highScores;
        let newScore = {};
        newScore["playerName"] = this.state.currentPlayerName;
        newScore["score"]=this.state.currentScore;
        highScores.push(newScore);
        highScores.sort((a,b)=>b.score-a.score);
        if(highScores.length>5){
            highScores.splice(-1,1);
        }
        this.setState({
            previousPlayerName:this.state.currentPlayerName,
            previousScore:this.state.currentScore,
            currentPlayerName:"",
            currentScore:"",
            highScores:highScores
        });
        let localStorage = window.localStorage;
        if(localStorage){
            localStorage["highScores"]=JSON.stringify(this.state.highScores);
        }
    };

    savePlayerName = (currentPlayerName)=>{
        this.setState({
            currentPlayerName:currentPlayerName,
            currentScore:0,
        })
    };

    render(){
        let colorArray = ["blue","red","yellow","black","orange"];
        let maxTime = 30;
        let plusPoint = 2;
        let negativePoint = -1;
        return(
            <div style={gameMain}>
                <GameArea
                    timer={maxTime}
                    colorArray={colorArray}
                    changeScore={this.changeScore}
                    playerName={this.state.currentPlayerName}
                    savePlayerName={this.savePlayerName}
                    plusPoint={plusPoint}
                    negativePoint={negativePoint}
                    restartGame={this.restartGame}
                    currentScore={this.state.currentScore}
                />
                <ScoreBoard
                    highScores={this.state.highScores}
                />
            </div>
        );
    }
}
