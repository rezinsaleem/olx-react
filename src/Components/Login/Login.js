import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {Firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()

  const handleLogin = (e)=>{
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className='container'>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={'/signup'}>SignUp</Link>
      </div>
      </div>
    </div>
  );
}

export default Login;
