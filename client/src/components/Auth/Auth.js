import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { login, register } from "../../actions/auth";
import "./auth.css";

const initialState = {
  userType: "",
  firstName: "",
  lastName: "",
  userName: "",
  mail: "",
  password: "",
  confirmPassword: "",
   errors: {
    userName: "",
    password: "",
  },
};

function Auth() {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
    
  });
  const [errorMail, setErrorMail] = useState({
    mail: ""
  });
  const [errorConfirmPassword, setErrorConfirmPassword] = useState({
    confirmPassword: ""
  });

  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      userName: "",
      password: "",
    });
    setError("");
    setErrorMail({
      mail: ""
    });
    setErrorConfirmPassword({
      confirmPassword: ""
    })

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/;

    
    if (isSignup) {
      if (!formData.mail.match(emailRegex)) {
       setErrorMail({ mail: "Invalid email format" }); 
      } 
      if (!formData.password.match(passwordRegex)) {
        setErrors({ password: "Password must be 7-19 characters and contain at least one letter, one number and a special character" });
      }
      else if (!formData.confirmPassword.match(formData.password)) {
        setErrorConfirmPassword({confirmPassword : "Not match with Password"})
      }
      else {
        dispatch(register(formData, history, setError))

       }
   
    } else {
      dispatch(login(formData, history, setError))
        .then((response) => {
          if (response.error) { 
            setError(response.error);
          }
        })
        .catch((error) => { 
          setError("Invalid Account. Please enter again!");
        })
    }
  };
  const handleChange = (e) => {
     setErrors({
      userName: "",
      password: "",
    });
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
    
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  return (
    <div className="fullscreen-container">
      <div className="content">
        <Container component="main" maxWidth="xs" className="login_page">
          <Paper className={classes.paper} elevation={3} >
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isSignup
                ? isLanguageEnglish
                  ? "Sign up"
                  : "Đăng Ký"
                : isLanguageEnglish
                ? "Sign in"
                : "Đăng Nhập"}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {isSignup && (
                  <>
                    <Input
                      name="firstName"
                      label={isLanguageEnglish ? "First Name" : "Họ"}
                      handleChange={handleChange}
                      autoFocus
                      half
                    />
                    <Input
                      name="lastName"
                      label={isLanguageEnglish ? "Last Name" : "Tên"}
                      handleChange={handleChange}
                      half
                    />
                    {/* <Input
                      name="userType"
                      label={isLanguageEnglish ? "User type" : "Rodzaj konta"}
                      handleChange={handleChange}
                    /> */}
                    <Input
                      name="mail"
                      label={isLanguageEnglish ? "Email address" : " Địa chỉ Email"}
                      handleChange={handleChange}
                      type="email"
                      error={errorMail.mail}
                      setError={setErrorMail}
                      helperText={errorMail.mail}
                    />
                  </>
                )}

                <Input
                  name="userName"
                  label={isLanguageEnglish ? "User Name" : "Tên Tài Khoản"}
                  handleChange={handleChange}
                  error={error || errors.userName}
                  setError={setError || setErrors }
                  helperText={errors.userName}
                />
                <Input
                  name="password"
                  label={isLanguageEnglish ? "Password" : "Mật Khẩu"}
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                  error={error || errors.password}
                  setError={setError || setErrors }
                  helperText={errors.password}
                />
                {isSignup && (
                  <Input
                    name="confirmPassword"
                    label={isLanguageEnglish ? "Repeat password" : "Xác Nhận Mật Khẩu"}
                    handleChange={handleChange}
                    type="password"
                    error={errorConfirmPassword.confirmPassword}
                    setError={setErrorConfirmPassword}
                    helperText={errorConfirmPassword.confirmPassword}
                  />
                )}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isSignup
                  ? isLanguageEnglish
                    ? "Sign up"
                    : "Zarejestruj się"
                  : isLanguageEnglish
                  ? "Sign in"
                  : "Zaloguj się"}
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button onClick={switchMode}>
                    {isSignup
                      ? isLanguageEnglish
                        ? "Already have an account? Sign in"
                        : "Masz już konto? Zaloguj się"
                      : isLanguageEnglish
                      ? "Don't have an account? Sign Up"
                      : "Nie masz konta? Zarejestruj się"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>

     </div>
    </div>
  )
}

export default Auth;
