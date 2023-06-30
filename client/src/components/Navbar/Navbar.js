import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
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
    <header>
      <nav className={styles.nav}>
        <div className={styles["menu-left"]}>
          <ul className={styles.nav__list}>
            <li className={styles["nav__list-logo"]}>
              <Link to="/" className={styles["logo-link"]}>
                <img src={logo} alt="logo" className={styles["logo-img"]} />
              </Link>
            </li>
            <Link to="/" className={styles["nav__list-item"]}>
              <HomeIcon style={{ fontSize: "22px", margin: "0 3px 4px 0" }} />
              {isLanguageEnglish ? "Home" : "Trang chủ"}
            </Link>
            <li className={styles["nav__list-item"]}>
              <InfoIcon style={{ fontSize: "22px", margin: "0 3px 4px 0" }} />
              {isLanguageEnglish ? "About" : "Thông tin"}
              <ul className={styles["nav__list-item-drop"]}>
                <li className={styles["item__drop"]}>
                  <Link to={"/"} className={styles["linkStyle"]}>
                    {isLanguageEnglish
                      ? "How it works"
                      : "Hoạt động như thế nào"}
                  </Link>
                </li>
                <li className={styles["item__drop"]}>
                  <Link to={"/"} className={styles["linkStyle"]}>
                    {isLanguageEnglish ? "Ways to play" : "Cách để tham gia"}
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles["nav__list-item"]}>
              <MenuBookIcon
                style={{ fontSize: "22px", margin: "0 3px 4px 0" }}
              />
              {isLanguageEnglish ? "Study" : "Học tập"}
              <ul className={styles["nav__list-item-drop"]}>
                <li className={styles["item__drop"]}>
                  <Link to="/quizes" className={styles["linkStyle"]}>
                    {isLanguageEnglish ? "Public quizes" : "Câu hỏi công khai"}
                  </Link>
                </li>
                <li className={styles["item__drop"]}>
                  <Link to={"/"} className={styles["linkStyle"]}>
                    {isLanguageEnglish ? "Test game" : "Kiểm tra"}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles["menu-right"]}>
          <ul className={styles.nav__list}>
            <Link to="/" className={styles["nav__list-item"]}>
              <ContactSupportIcon />
              {isLanguageEnglish ? "Contact" : "Liên hệ"}
            </Link>

            {user ? (
              <>
                {user.result.userType === "Student" && (
                  <li className={styles["nav__list-item"]}>
                    <Link to="/games/joingame">
                      {isLanguageEnglish ? "Play" : "Chơi"}
                    </Link>
                  </li>
                )}
                {user.result.userType === "Teacher" && (
                  <li className={styles["nav__list-item"]}>
                    <Link to="/myquizes">
                      {isLanguageEnglish ? "My Quizes" : "Câu hỏi của tôi"}
                    </Link>
                  </li>
                )}
                <li className={styles["nav__list-item"]}>
                  {user.result.firstName}
                </li>
                <li onClick={logout} className={styles["nav__list-item"]}>
                  {isLanguageEnglish ? "Log out" : "Đăng xuất"}
                </li>
              </>
            ) : (
              <Link to="/auth" className={styles["nav__list-item"]}>
                <VpnKeyIcon
                  style={{ fontSize: "22px", margin: "0 3px 4px 0" }}
                />
                {isLanguageEnglish ? "Log in" : "Đăng nhập"}
              </Link>
            )}
            <li className={styles["nav__list-item"]}>
              <img src={globe} alt="" />
              {isLanguageEnglish ? "EN" : "VN"}
              <ul className={styles["nav__list-item-drop"]}>
                <li
                  onClick={() => {
                    dispatch(changeLanguage(!isLanguageEnglish));
                  }}
                >
                  {isLanguageEnglish ? "Vietnamese" : "English"}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
