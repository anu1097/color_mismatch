import React from "react";
import CountdownTimer from "./CountdownTimer";
import QueCards from "./QueCards";
import {Options} from "./Options";
import StartGame from "./StartGame";

const gameArea = {
    flexGrow: "8",
    margin: "0 20px",
    border: "1px solid",
    borderRadius: "10px",
    height:"90vh"
};

export default class GameMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colorArray: props.colorArray
        }
    }

    componentWillMount() {
        this.generateQuestionsAndAnswers();
    }

    checkKey = (e)=>{
        if (e.keyCode === 37) {
            this.onClick(false);
        }
        else if (e.keyCode === 39) {
            this.onClick(true);
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.playerName!==""){
            document.addEventListener("keydown", this.checkKey, false);
        }
    }

    selectRandom = (colorArray) => colorArray[Math.floor(Math.random() * colorArray.length)];

    generateQuestionsAndAnswers = () => {
        let {colorArray} = this.state;
        let question = {
            colorName: this.selectRandom(colorArray),
            colorStyle: "black"
        };
        let answer = {
            colorName: this.selectRandom(colorArray),
            colorStyle: this.selectRandom(colorArray)
        };
        this.setState({
            question: question,
            answer: answer
        })
    };

    onClick = (value) => {
        let {changeScore, plusPoint, negativePoint} = this.props;
        if (value) {
            if (this.state.question.colorName === this.state.answer.colorStyle) {
                changeScore(plusPoint);
            } else changeScore(negativePoint);
        }
        else {
            if (this.state.question.colorName !== this.state.answer.colorStyle) {
                changeScore(plusPoint);
            } else changeScore(negativePoint);
        }
        this.generateQuestionsAndAnswers();
    };

    render() {
        let {timer,playerName,savePlayerName,restartGame,currentScore} = this.props;
        return (
            <div style={gameArea}>
                {
                    playerName === "" ?
                        <StartGame savePlayerName={savePlayerName}/>
                        :
                        <div style={{display:"flex", height:"100%", alignItems:"space-between",flexDirection:"column"}}>
                            <CountdownTimer restartGame={restartGame} timer={timer} score={currentScore}/>
                            <QueCards
                                question={this.state.question}
                                answer={this.state.answer}
                            />
                            <Options onClick={this.onClick}/>
                        </div>
                }
            </div>
        );
    }
}
