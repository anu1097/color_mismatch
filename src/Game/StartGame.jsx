import React from "react";

export default class StartGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ""
        };
    }

    checkKey = (e) => {
        if (e.keyCode === 13 && this.state.playerName !== "") {
            this.props.savePlayerName(this.state.playerName)
        }
    };

    componentWillMount() {
        document.addEventListener("keydown", this.checkKey, false);
    }

    render() {
        let {savePlayerName} = this.props;
        let {playerName} = this.state;
        const startGameStyle = {
            height:"100%",
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center"
        };
        const inputStyle = {
            width: '25%',
            maxWidth: "50%",
            lineHeight: "1.5em",
            outline: 0,
            border: 0,
            borderBottom: "1px solid lightgrey"
        };
        const buttonStyle = {
            width: '25%',
            marginTop: '5px',
            padding: "10px",
            outline: 0,
            color: "#ffffff",
            background: "#0582ab",
            border: "none",
            fontWeight: "bold"
        };
        return (
            <div style={startGameStyle}>
                <input
                    style={inputStyle}
                    name="playerName"
                    value={playerName}
                    placeholder="Player Name"
                    onChange={(event) => {
                        this.setState({playerName: event.target.value})
                    }}
                />
                <button
                    style={buttonStyle}
                    onClick={() => savePlayerName(playerName)}
                >
                    Start Game
                </button>
            </div>
        )
    }

}