import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import GreetingButton from './components/Greeting';
import GoodbyeButton from './components/Goodbye';
import ResponseView from './components/ResponseView';

class App extends Component {

    constructor(props) {
      super(props);
		
      this.state = {
         responseMessage: ""
      }

      this.updateMessage = this.updateMessage.bind(this)
    }

    updateMessage(message){
        console.log('New message:', message);
        this.setState({responseMessage: message});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="container">
                    <GreetingButton messageUpdater={this.updateMessage}/>
                    | 
                    <GoodbyeButton messageUpdater={this.updateMessage}/>
                </div>
                <div className="container">
                    <ResponseView message={this.state.responseMessage}/>
                </div>
            </div>
        );
    }
}

export default App;
