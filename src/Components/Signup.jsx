import React, { Component } from 'react';
import './Signup.css';
import LightLogo from '../Images/logo-light.png';
import point from '../Images/pointes.png';
import element from '../Images/staire.png';
import vector from '../Images/Vector.png';
import back from '../Images/back.png';
import google from '../Images/google.png';
import { Link } from 'react-router-dom';

export default class Signup extends Component {

    state = {
        email: '',
        password: '',
        confirm_password: '',
        checked: true,
        errorMsg: false
    }

    handeleSubmit = (e) => {
        e.preventDefault()
        if (this.state.email.length || this.state.password.length || this.state.confirm_password.length == 0) {
            this.setState({errorMsg: true})      
        }
        console.log(this.state)
    }

    handelChange = (e) => {
        const {value, id} = e.target
        console.log(value, id)
        this.setState({ [id]:value })
        console.log(this.state)
    }

    handelPassword = (e) => {
        const password = e.target.value;
        if (password.length < 4) {
            alert('awd')
        }
    }

    render() {
        return ( 
            <div className='signup-box'>
                <div className="signup-left-side">
                    <div className='overlay'>
                        <div className="light-logo-section">
                            <img src={LightLogo} alt="logo" />
                            <p>Gamers</p>
                        </div>
                        
                        <div className='pointes-image'>
                            <img src={point} alt="point" />
                        </div>

                        <div className="text-section">
                            <span className='quotation color1'>“</span>
                            <p className='color2'>
                                I always observe the people who pass by when I ride an escalator.
                                I'll never see most of them again, so I imagine a lot of things about their lives... 
                                about the day ahead of them.
                            </p>
                        </div>

                        <div className='footer'>
                            <p>Hideo Kojima</p>
                            <img src={element} alt="" />
                        </div>

                        <img src={vector} alt="" />

                    </div>
                </div>

                <div className="signup-right-side">
                    <div className="back">
                        <img src={back} alt="" />
                        <p> Back </p>
                    </div>

                    <div className="signup-discription-box">
                        <h1>Register Individual Account!</h1>
                        <p>
                            For the purpose of gamers regulation, your details are required
                        </p>
                    </div>

                    <form className='signup-form' onSubmit={this.handeleSubmit}>
                            <label htmlFor="email">Email address*</label>
                            <input 
                                type="email" 
                                id='email' 
                                placeholder='Write your email'
                                onChange={this.handelChange}
                                // required
                            />
                            {/* ERROR MESSAGE */}
                            {this.state.errorMsg && this.state.email.length <= 0 ?  
                                <>
                                    <p className='error-msg'>Please Enter your Email !</p> 
                                </>
                            : ""}
                            <label htmlFor="password">Create password*</label>
                            <input 
                                type="password" 
                                id='password' 
                                placeholder='•••••••••'
                                onChange={this.handelChange}
                                // required
                            />
                            {/* ERROR MESSAGE */}
                            {this.state.errorMsg && this.state.password <= 0 ? 
                                <>
                                    <p className='error-msg'> Please Enter Your Password !</p> 
                                </>
                            : ""}

                            <div className='password-power'>

                            </div>

                            <label htmlFor="confirm_password">Repeat password*</label>
                            <input 
                                type="password" 
                                id='confirm_password' 
                                placeholder='•••••••••'
                                onChange={this.handelChange}
                                // required
                            />
                            {/* ERROR MESSAGE */}
                            {this.state.errorMsg ? 
                                <>
                                    <p className='error-msg'> Please Confirm Your Password ! </p>
                                </>
                                : ""
                            }

                            <div className='checkbox-div'>
                                <input 
                                    onChange={this.handelChange} 
                                    onClick={()=>this.setState({checked:!this.state.checked})}
                                    checked={this.state.checked}
                                    className='chekbox' type="checkbox" 
                                    id="chekbox" 
                                />
                                <label htmlFor="chekbox">I agree to terms & conditions </label>
                            </div>

                            <button>Register Account</button>
                            <Link to="/login" className='login-btn'>
                                <img src={google} alt="" />
                                login
                                <div></div>
                            </Link>
                        </form>

                </div>
                
            </div>
        )
    }
}