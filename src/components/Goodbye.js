import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const API_ENDPOINT = "http://localhost:8080/api/goodbye";

export default class GoodbyeButton extends Component {

    constructor(props) {
        super(props);

        this.getGoodbye = this.getGoodbye.bind(this);
    }

    getGoodbye() {
        let updateFunc = this.props.messageUpdater;
        axios.get(API_ENDPOINT)
            .then(function (response) {
                console.log(response.data);
                updateFunc(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                updateFunc("Error reading the Goodbye api endpoint");
                return error;
            });
    }



    render() {
        return (
            <Button onClick={() => this.getGoodbye()} bsStyle="warning">Get Goodbye</Button>
        );
    }
}
