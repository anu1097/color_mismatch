import React from "react";

const countDown = {
    flex:2,
    fontWeight:"bold",
    borderRadius:"10px 10px 0 0",
    padding:"10px",
    backgroundColor:"#E4E8FF",
    progressStep:{
        backgroundColor:"#0745f58c",
        height:"10px",
        maxWidth:"100%",
        borderRadius:"0 0 10px 10px",
    }
};

export default class CountdownTimer extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount(){
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick = ()=> {
        if(this.state.count >= this.props.timer){
            this.props.restartGame();
            clearInterval(this.timer);
        }
        else{
            this.setState({count: (this.state.count + 0.1)})
        }
    };

    startTimer = ()=> {
        clearInterval(this.timer);
        this.timer = setInterval(this.tick, 100)
    };

    secToString = (time)=> {
        return (time / 60 < 10 ? "0" : "") + ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + ~~(time % 60);
    };

    render(){
        let width = `${(this.state.count/this.props.timer)*100}%`;
        return (
            <div>
                <div style={countDown}>
                    <span>Time: {this.secToString(this.state.count)} / {this.secToString(this.props.timer)}</span>
                    <span style={{float:"right"}}>Score: {this.props.score}</span>
                </div>
                <div style={{...countDown.progressStep, width:width}}/>
            </div>
        )
    };
}
