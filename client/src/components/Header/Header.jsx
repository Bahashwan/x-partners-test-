import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginPageControl, regPageControl } from '../../redux/regPageSlice';
import { logout } from '../../redux/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const onClick = {
    login: () => {
      dispatch(loginPageControl());
    },
    reg: () => {
      dispatch(regPageControl());
    },
    logout:()=>{
      localStorage.token = ''
      dispatch(logout)
      window.location.reload()
    }
  };
  const user = useSelector((state) => state.user.user);

  let isLogged = user.id != null && user.id !== '';

 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">Navbar</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-link" >
                UsersList
              </div>
              <div
                className={`nav-link ${isLogged?'disabled':''}`}
                onClick={onClick.login}
                
              >
                Login
              </div>
              <div className={`nav-link ${isLogged?'disabled':''}`}onClick={onClick.reg} >
                registrate
              </div>
              <div className={`nav-link ${!isLogged?'disabled':''}`} onClick={onClick.logout}>
                LogOut
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
