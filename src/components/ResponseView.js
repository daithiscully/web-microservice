import React, {Component} from 'react';
import {Well} from 'react-bootstrap';


export default class ResponseView extends Component {


    handleClick(event) {
        console.log("Greeting clicked");
    }

    render() {
        return (
            <Well>{this.props.message}</Well>
        );
    }
}
