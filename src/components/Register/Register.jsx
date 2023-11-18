import React, {useState} from 'react'
import '../../App.scss'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios';

//Importing assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

//Importing Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Register = () => {
    //UseState to hold our inputs
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useNavigate()

    //Onclick let us get what the user has entered
    const createUser = (e)=>{
        e.preventDefault()
        //We shall require Axios to create on API that connects to the server - lets install that
        Axios.post('https://growplants-168e2c665c07.herokuapp.com/register', {
            //create variable to send to the server through the route 
            Email: email,
            UserName: userName,
            Password: password
        }).then(()=>{
            navigateTo('/');
            setEmail('')
            setUserName('')
        })
    }

    return (
        <div className ='registerPage flex'>
            <div className = "container flex">
                <div className="videoDiv">
                    <video className="video" src={video} autoPlay muted loop></video>
                    <div className ="textDiv">
                        <h2 className="title">Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Have an account?</span>
                        <Link to={'/'}>
                            <button className ='btnm'>Login</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img className="img" src={logo} alt="Logo Image"/>
                        <h3>Let Us Know You!</h3>
                    </div>
                    
                    <form action="" className='form grid' onSubmit={createUser}>
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className="icon"/>
                                <input type="email" id="email" placeholder="Enter Email" onChange={(event)=>{
                                    setEmail(event.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon"/>
                                <input type="text" id="username" placeholder="Enter Username"
                                onChange = {(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id="password" placeholder="Enter Password"
                                onChange ={(event)=>{
                                    setPassword(event.target.value)
                                }}/>
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={createUser}>
                            <span>Register</span>
                            <AiOutlineSwapRight className="icon"/>
                        </button>

                        <span className='forgotPassword'>
                            Forgot your password? <a href="">Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
