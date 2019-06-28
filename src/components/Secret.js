import React, { Component } from 'react'
import Axios from 'axios';

class Secret extends Component {
    constructor() {
        super();
        this.state = {
          message: 'Loading...'
        }
      }
    
    componentDidMount() {
    console.log('token',localStorage.getItem('token'));
    Axios.get('http://localhost:4000/user/secret/'+localStorage.getItem('token'))
        // .then(res => res.text())
        .then(res => this.setState({message: res}));
    }

    render() {
        console.log('token',localStorage.getItem('token'));
        return (
            <div>
                <h1>Secret</h1>
            </div>
        )
    }
}

export default Secret;
