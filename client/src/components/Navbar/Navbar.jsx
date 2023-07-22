import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";
import globe from "../../assets/globe.svg";
import logo from "../../assets/logo.png";
import { changeLanguage } from "../../actions/language";
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import HomeIcon from "@material-ui/icons/Home";
import InputIcon from "@material-ui/icons/Input";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const socket = useSelector((state) => state.socket.socket);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/auth");
    setUser(null);
    socket.disconnect();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const token = user?.accessToken;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-left"><div className="navbar-logo">Quizz.</div>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li className="navbar-menu-item">Home</li>
        <li className="navbar-menu-item">Contact</li>
        <li className="navbar-menu-item">Game</li>
      </ul></div>
      
  
      <div className="navbar-register">
        <button className="navbar-register-btn">Register Now</button>
      </div>
      <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="navbar-toggle-icon"> </span>
        <span className="navbar-toggle-icon"> </span>
        <span className="navbar-toggle-icon"> </span>
      </div>
    </nav>
  );
}

export default Navbar;
