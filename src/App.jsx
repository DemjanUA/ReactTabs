import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Tabs />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));