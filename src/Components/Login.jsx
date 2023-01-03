import React, { Component } from 'react'
import './Login.css';
import logo from '../Images/logo.png';
import game from '../Images/game.png';
import google from '../Images/google.png';
import twitter from '../Images/twitter.png';
import linkedin from '../Images/linkendin.png';
import githup from '../Images/githup.png';
import { Link, Navigate, redirect } from 'react-router-dom';

export default class Login extends Component {


    state = {
        email: '',
        password: '',
        errorMsg: false
    }

    handeleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email.length || this.state.password.length == 0) {
            this.setState({errorMsg: true})      
        }
        console.log(this.state)
    }

    handelChange = (e) => {
        const {value, id} = e.target
        console.log(value, id)
        this.setState({ [id]:value })
    }

    test = () => {
        redirect('/profile')
    }

    render() {
        return (
            <div className='login-box'>
                <div className="left-side">
                    <div className="logo-section">
                        <img src={logo} alt="website-logo" />
                        <p>Gamers</p>
                    </div>
                    
                    <div className="text-section">
                        <span className='quotation'>“</span>
                        <p>
                            I always observe the people who pass by when I ride an escalator.
                            I'll never see most of them again, so I imagine a lot of things about their lives... 
                            about the day ahead of them.
                        </p>
                    </div>

                    <div className='img-section'>
                        <p>Hideo Kojima</p>
                        <img src={game} alt="" />
                    </div>
                </div>

                <div className="right-side">
                    <div className="discription-box">
                        <h1>Join the game!</h1>
                        <p>
                            Go inside the best gamers social network!
                        </p>
                    </div>

                    <div className="social-box">
                        <div>
                            <img src={google} alt="google-logo" />
                        </div>
                        <div>
                            <img src={twitter} alt="twitter-logo" />
                        </div>
                        <div>
                            <img src={linkedin} alt="linkedin-logo" />
                        </div>
                        <div>
                            <img src={githup} alt="githup-logo" />
                        </div>
                    </div>

                    <div className="horizontal-line">
                        <div></div>
                        <span>Or</span>
                        <div></div>
                    </div>

                    <form onSubmit={this.handeleSubmit} >
                        <label htmlFor="email">Your email</label>
                        <input 
                            type="email" 
                            id='email' 
                            placeholder='Write your email'
                            onChange={this.handelChange}
                        />
                        {/* ERROR MESSAGE */}
                        {this.state.errorMsg && this.state.email.length <= 0 ?  
                                <>
                                    <p className='error-msg'>Please Enter your Email !</p> 
                                </>
                            : ""}
                        <label htmlFor="password">Enter Your password</label>
                        <input 
                            type="password" 
                            id='password' 
                            placeholder='•••••••••'
                            onChange={this.handelChange}
                        />
                         {/* ERROR MESSAGE */}
                        {this.state.errorMsg && this.state.password <= 0 ? 
                                <>
                                    <p className='error-msg'> Please Enter Your Password !</p> 
                                </>
                            : ""}
                        { this.state.email && this.state.password !== 0 ? 
                            <Link className='login-link' to="/profile">
                                Login
                            </Link>
                            : <button type='submit'>Login</button>
                        }
                    </form>

                    <div className="haveaccount">
                        <span>Don’t have an account? <a href='/signup'> Register </a></span>
                    </div>
                </div>
            </div>
        )
    }
}