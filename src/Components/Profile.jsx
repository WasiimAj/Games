import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

import GameLogo from "../Images/game-logo.png";
import heart from "../Images/Like (喜欢).png";
import setting from "../Images/setting.png";
import puzzel from "../Images/Puzzle (拼图).png";
import sun from "../Images/sun.png";
import moon from "../Images/moon.png";
import user from "../Images/user.jpg";
import hogwars from "../Images/hogwars-logo.jpg";
import godofwarsgamelogo from "../Images/godofwargame-logo.jpg";
import crash from "../Images/crash-logo.jpg";
import dyinglight2 from "../Images/dyinglight2-logo.jpg";
import cup from "../Images/cuplight.png";
import avatar from '../Images/gameofthrouns-logo.png'
import logo from '../Images/pngaaa.com-3289512.png'
import spiderlogo from '../Images/ed663199338341 1.png'
import frindes from '../Images/FRIENDS.png';


import Title from './Title';

export default class Profile extends Component {
    render() {
        return (
            <div className='profile-div'>
                <div className='side-bar'>
                    <Link>
                        <img className='game-logo' src={GameLogo} alt="games-logo" />
                    </Link>

                    <div className='setting-div'>
                        <Link>
                            <img className='setting-icons' src={heart} alt="games-logo" />
                        </Link>
                        <Link>
                            <img className='setting-icons' src={setting} alt="games-logo" />
                        </Link>
                        <Link>
                            <img className='setting-icons' src={puzzel} alt="games-logo" />
                        </Link>
                    </div>

                    <div className='theem-div'>
                        <img src={moon} alt="" />
                        <img src={sun}alt="" />
                    </div>
                </div>

                <div className='colum-line'>

                </div>

                <div className="games-box">
                    <header className='profile-header'>
                        <Title title="NEW GAMES"/>
                        <div className='user-box'>
                            <p> 
                                Welcom back, <br/>
                                    Jenny!
                            </p>
                            <img src={user} alt="user-img" />
                        </div>
                    </header>

                    <div className="games-slider">
                        <div className='game-card'>
                            <div className='avatar-img'></div>
                            <div className='game-logo-and-text'>
                                <img src={avatar} alt="" />
                                <p>
                                    Join in the new DLC with Kratos to <br/> learn more about him and his future.
                                </p>
                            </div>
                        </div>
                        <div className='game-card a1'>
                            <div className='avatar-img avatar1'></div>
                            <div className='game-logo-and-text'>
                                <img className='custom' src={logo} alt="" />
                                <p>
                                    Be part of the Suicide Squad <br/> and kill the Justice League!
                                    -Amanda Waller
                                </p>
                            </div>
                        </div>
                        <div className='game-card a2'>
                            <div className='game-logo-and-text'>
                                <img src={spiderlogo} alt="" className='spiderman-logo'/>
                                <p>
                                Miles Morales discovers powers <br/> from his mentor, Peter Parker.<br/> 
                                Master his unique, bio-electric <br/> venom blast attacks.
                                </p>
                            </div>
                            <div className='avatar-img avatar2'></div>
                        </div>
                    </div>

                    <div className="last-games">

                        <div className='last-played'>
                            <Title title="last played" />
                            <div>
                                <img className='last-played-img' src={hogwars} alt="" />
                                <p className='last-played-p'>Hogwarts Legacy 50%</p>
                            </div>
                            <div>
                                <img className='last-played-img' src={godofwarsgamelogo} alt="" />
                                <p className='last-played-p'>God Of War: Ragnarök 72.5%</p>
                            </div>
                            <div>
                                <img className='last-played-img' src={crash} alt="" />
                                <p className='last-played-p'>Crash Bandicoot N. Sane Trilogy 34%</p>
                            </div>
                            <div>
                                <img className='last-played-img' src={dyinglight2} alt="" />
                                <p className='last-played-p'>Dying Light 2 Stay Human 100%</p>
                            </div>
                        </div>
                        <div className='most-trophy'>
                            <Title title="most recent trophy" />
                            <div className="last-trophy">
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>
                                        <h2 className='last-trophy-header'>perfect KILL streak</h2>
                                        <p className='last-trophy-p'>You are in the 0.5%</p>
                                    </div>
                                    <img className='cup' src={cup} alt="" />
                                </div>

                                <div className="last-trophy-details">
                                    <p>
                                        assassin's creed odyssey
                                    </p>
                                    <span>
                                        last played: 34 hours ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='frindes'>
                            {/* <Title title="friends"/> */}
                            <img className='frindes-img' src={frindes} alt="" />
                        </div>
                    
                    </div>
    

                </div>

            </div>
        )
    }
    }
