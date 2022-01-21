import React from "react";
import Footer from "./Footer";

const validator = require('email-validator');

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            username: '',
            password: '',
            validUser : false,
            inValidUser : false,
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }
    handleUserNameChange(event) {
        this.setState({
            username: event.target.value,
        });
    }
    handlePasswordChange = (event) => {
        if (validator.validate(this.state.username)) {
            this.setState({
                password: event.target.value,
                validUser : true,
            })
        }
        else {
            this.setState({
                inValidUser : true,
            })
        }
         
    }
    handleLogIn() {
        this.setState({
            isLoggedIn : true,
        })
    }

    render() {
        if(this.state.inValidUser){
            return (
                <h3>You have entered incorrect email</h3>
            )
        }
        else if (!this.state.isLoggedIn) {
            return (
                <div>
                    <h1>Welcome to Login Page</h1>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUserNameChange}></input>
                    <br />
                    <label>Password </label>
                    <input type='text' value={this.state.password} onChange={this.handlePasswordChange}></input>
                    <br/>
                    <button type="button" disabled = {!this.state.validUser} onClick={this.handleLogIn}>Sign in</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h1>You have succesfully logged in.</h1>
                    <Footer greeting = {this.state.username}/>
                </div>
            )
        }
        

    }
}

export default MainContent;