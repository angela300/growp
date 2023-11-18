import React, {useState, useEffect} from 'react'
import './Login.css'
import '../../App.scss'
import { Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

//Importing assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

//Importing Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
    //Usestate Hook to stare inputs

    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();

    //Let us now show the message to the user
    //const [loginStatus, setLoginStatus] = useState('')
    //const [statusHolder, setstatusHolder] = useState('message')

    // const loginUser = (e) => {
    //     e.preventDefault();

    //     Axios.post('http://localhost:3002/login', {
    //         //create variable to send to the server through the route 
    //         LoginUserName: loginuserName,
    //         LoginPassword: loginPassword
            
    //     }).then((response)=>{
    //         if(err){
    //             console.log(err)
    //         }
    //         if(response.data.message || loginUserName == '' || loginPassword ==''){
    //             //If credentials do not match
    //            navigateTo('/') //so we shall naviagte to the same Login page
    //            setLoginStatus('credentials do not exist!');
    //         }
    //         else{
    //             navigateTo('/dashboard') // If the credentials match we shall navigate to the dashboard
    //         }
    //     })
    // }

    // useEffect(()=>{
    //     if(loginStatus !==''){
    //         setstatusHolder('showMessage') //Show message
    //         setTimeout(()=>{
    //             setstatusHolder('message'); //Hide if after 4s
    //         }, 4000);        
    //     }
    // }, [loginStatus])

    // //Lets clear the form on submit
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setLoginUserName('');
    //     setLoginPassword('');
    // }

    const loginUser = (e)=>{
        e.preventDefault()

        //We shall require Axios to create on API that connects to the server - lets install that


        try {
            const response = Axios.post('https://growplants-168e2c665c07.herokuapp.com/login', {
              LoginUserName: loginUserName,
              LoginPassword: loginPassword,
            });
      
            if (loginUserName === '' || loginPassword === '') {
              // Handle unsuccessful login
              console.error('Credentials do not exist!');
              //navigateTo('/');
            } else {
              // Successful login
              navigateTo('/dashboard');
              setLoginUserName('');
              setLoginPassword('');
            }
          } catch (error) {
            console.error('Error during login');
            // Handle the error and provide user feedback if needed
          }
    }

    return (
        <div className ='loginPage flex'>
            <div className = "container flex">
                <div className="videoDiv">
                    <video className="video" src={video} autoPlay muted loop></video>
                    <div className ="textDiv">
                        <h2 className="title">Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Don't have an account?</span>
                        <Link to={'/register'}>
                            <button className ='btnm'>Sign Up</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img className="img" src={logo} alt="Logo Image"/>
                        <h3>Welcome Back!</h3>
                    </div>

                    <form action="" className='form grid' onSubmit={loginUser}>
                        <span className="statusHolder"></span>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon"/>
                                <input type="text" id="username" placeholder="Enter Username"
                                onChange={(event)=>{
                                    setLoginUserName(event.target.value)
                                }}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    onChange={(event) => {
                                        setLoginPassword(event.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={loginUser}>
                            <span>Login</span>
                            <AiOutlineSwapRight className="icon"/>
                        </button>

                        <a href="/dashboard">Dashboard</a>

                        <span className='forgotPassword'>
                            Forgot your password? <a href="">Click Here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
