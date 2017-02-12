import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const API_ENDPOINT = "http://localhost:8081/api/hello";

export default class GreetingButton extends Component {

    constructor(props) {
        super(props);

        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        let updateFunc = this.props.messageUpdater;
        axios.get(API_ENDPOINT)
            .then(function (response) {
                console.log(response.data);
                updateFunc(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                updateFunc("Error reading the Greeting api endpoint");
                return error;
            });
    }


    render() {
        return (
            <Button onClick={() => this.getGreeting()} bsStyle="success">Get Greeting</Button>
        );
    }
}
