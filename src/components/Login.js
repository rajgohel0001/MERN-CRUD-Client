import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './Login.css';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AllUser from './AllUser';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            user_name:'',
            user_password:''
        }
    }
    onChangeUserName(e){
        this.setState({
            user_name: e.target.value
        });
    }
    onChangeUserPassword(e){
        this.setState({
            user_password: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.user_name} and ${this.state.user_password}`)
        const obj = {
            user_name: this.state.user_name,
            user_password: this.state.user_password,
        };
        axios.post('http://localhost:4000/user/authenticate',obj)
            .then(res => {
                console.log(res.data);
                if(res.status === 200){
                    console.log("res",res);
                    localStorage.setItem('token',''+res.data.data);
                    this.props.history.push('/allUser');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error Logging in please try again');
            });
    }
    render() {
        if(!(localStorage.getItem('token'))){
            return (
                <Grid container>
                    <Router>
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link onClick={() => {this.props.history.push('/')}} to={'/'} className="nav-link">Sign Up</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </Router>
                    <div className="login">
                    <h1 style={{marginTop:55}}>Login</h1>
                    <Card style={{padding:10}}>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input required 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.user_name}
                                    onChange={this.onChangeUserName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input required
                                    type="password" 
                                    className="form-control" 
                                    value={this.state.user_password}
                                    onChange={this.onChangeUserPassword}
                                />
                            </div>
                            <Button variant="contained" color="primary" type="submit">Login</Button>
                        </form>
                    </Card>
                    </div>
                </Grid>
            )
        } else {
            return(
                this.props.history.push('/alluser'),
                <AllUser />
            )
        }
    }
}

export default Login;