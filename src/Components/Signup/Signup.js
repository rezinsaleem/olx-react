import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { useNavigate,Link } from 'react-router-dom';

export default function Signup() {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const {Firebase} = useContext(FirebaseContext)

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((res)=>{
      res.user.updateProfile({displayName:username}).then(()=>{
        Firebase.firestore().collection('users').add({
          id:res.user.uid,
          username:username,
          phone:phone
        })
      }).then(()=>{
        navigate('/login')
      })
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div className="container">
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="username"
            placeholder="Enter your username"
          />
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="phone">Phone</label>
          <input
            className="input"
            type="number"
            id="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            placeholder="Enter your phone number"
          />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">Signup</button>
        </form>
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
}
