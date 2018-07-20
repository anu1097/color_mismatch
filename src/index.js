import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import GameMain from "./Game/GameMain";

ReactDOM.render(<GameMain/>, document.getElementById('root'));
registerServiceWorker();
