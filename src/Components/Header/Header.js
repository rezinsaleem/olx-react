import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { FirebaseContext } from '../../store/Context';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
const {user} = useContext(AuthContext)
const {Firebase} = useContext(FirebaseContext)
const navigate = useNavigate()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user?user.displayName:<Link to={'/login'} style={{color:'black'}}>Login</Link>}</span>
          <hr />
        </div>
          {user && <span style={{cursor:'pointer'}} onClick={()=>{
             Firebase.auth().signOut();
             navigate('/login')
          }}>Logout</span>}

        <Link to={'/create'} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
