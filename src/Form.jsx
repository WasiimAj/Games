import React, { Component } from 'react'

export default class Form extends Component {
    
    state = {
        name: '',
        email: '',
        password: '',
    }

    handeleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }


    handelChangeName = (e) => {
        // console.log('Name => ',e.target.value);
        this.setState({name: e.target.value})
    } 

    handelChangeEmail = (e) => {
        console.log('Email => ',e.target.value);
        this.setState({email: e.target.value})
    } 

    handelChangePassword = (e) => {
        console.log('Password => ',e.target.value);
        this.setState({password: e.target.value})
    } 

    handelChange = (e) => {
        const {value, id} = e.target
        console.log(value, id)
        this.setState({ [id]:value })

    }

    render() {
        return (
            <form onSubmit={this.handeleSubmit}>
                <label htmlFor="name">Name</label><br/>
                <input 
                    type="text" 
                    id="name" 
                    placeholder='Enter Your Name'
                    onChange={this.handelChange}
                    value={this.state.name}
                /><br/>
                <label htmlFor="email">Email</label><br/>
                <input 
                    type="email" 
                    id="email" 
                    placeholder='Enter Your Email'
                    onChange={this.handelChange}
                    value={this.state.email}
                /><br/>
                <label htmlFor="password">Password</label><br/>
                <input 
                    type="text" 
                    id="passwrod" 
                    placeholder='Enter Your Password'
                    onChange={this.handelChange}
                    value={this.state.password}
                /><br/>
                <button type="submit"> Submit </button>
            </form>
        )
    }
}
