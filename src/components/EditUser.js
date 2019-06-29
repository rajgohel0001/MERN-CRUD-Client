import React, { Component } from 'react';
// import axios from 'axios';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

class EditUser extends Component {
    constructor(props){
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            user_name:'',
            user_address:'',
            user_password:''
        }
    }
    // componentDidMount(){
    //     axios.get('http://localhost:4000/user/edit/'+this.props.match.params.id)
    //         .then(response => {
    //             console.log('response:',response);
    //             this.setState({
    //                 user_name: response.data.data.user_name,
    //                 user_address: response.data.data.user_address,
    //                 user_password: response.data.data.user_password
    //             });
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }
    onChangeUserName(e) {
        this.setState({
          user_name: e.target.value
        });
    }
    onChangeUserAddress(e) {
        this.setState({
          user_address: e.target.value
        });
    }
      onChangeUserPassword(e) {
        this.setState({
          user_password: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        // console.log('updated name:',this.state.user_name);
        // const obj = {
        //     user_name: this.state.user_name,
        //     user_password: this.state.user_password,
        //     user_address: this.state.user_address
        // };
        // axios.post('http://localhost:4000/user/update/'+this.props.match.params.id,obj)
        //     .then(res => console.log(res.data));
        const data = {
            newName: this.state.user_name ? this.state.user_name : this.props.post.userName,
            newPassword: this.state.user_password ? this.state.user_password : this.props.post.userPassword,
            newAddress: this.state.user_address ? this.state.user_address : this.props.post.userAddress
        }
        this.props.dispatch({type:'UPDATE', id: this.props.post.id, data: data})
        // this.props.history.push('/allUser');
    }
    render() {
        return (
            <div className="container" style={{marginTop:20}}>
                <h3>Update User</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <lable>Name</lable>
                            <input type="text"
                                className="form-control"
                                defaultValue={this.props.post.userName}
                                onChange={this.onChangeUserName}
                            />
                        </div>
                        <div className="form-group">
                            <lable>Password</lable>
                            <input type="text"
                                className="form-control"
                                defaultValue={this.props.post.userPassword}
                                onChange={this.onChangeUserPassword}
                            />
                        </div>
                        <div className="form-group">
                            <lable>Address</lable>
                            <input type="text"
                                className="form-control"
                                defaultValue={this.props.post.userAddress}
                                onChange={this.onChangeUserAddress}
                            />
                        </div>
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </form>
            </div>
        )
    }
}

export default connect()(EditUser);
