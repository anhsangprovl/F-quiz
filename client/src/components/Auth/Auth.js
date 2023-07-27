import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import { login, register } from '../../actions/auth';
import './auth.css';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const initialState = {
  userType: '',
  firstName: '',
  lastName: '',
  userName: '',
  mail: '',
  password: '',
  confirmPassword: '',
  errors: {
    userName: '',
    password: '',
  },
};

function Auth() {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const [errorMail, setErrorMail] = useState({
    mail: '',
  });
  const [errorConfirmPassword, setErrorConfirmPassword] = useState({
    confirmPassword: '',
  });

  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(register(formData, history));
    } else {
      dispatch(login(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const [userType, setUserType] = React.useState('');

  const handleChangeUserType = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="fullscreen-container">
      <div className="content">
        <Container component="main" maxWidth="xs" className="login_page">
          <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isSignup
                ? isLanguageEnglish
                  ? 'Sign up'
                  : 'Đăng kí'
                : isLanguageEnglish
                ? 'Sign in'
                : 'Đăng nhập'}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {isSignup && (
                  <>
                    <Input
                      name="firstName"
                      label={'First Name'}
                      handleChange={handleChange}
                      autoFocus
                      half
                    />
                    <Input
                      name="lastName"
                      label={ 'Last Name' }
                      handleChange={handleChange}
                      half
                    />
                   
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userType}
                        label="Age"
                        onChange={handleChangeUserType}
                      >
                        <MenuItem value={10}>Student</MenuItem>
                        <MenuItem value={20}>Teacher</MenuItem>
                      </Select>
                    </FormControl>
                    <Input
                      name="mail"
                      label={isLanguageEnglish ? 'Email address' : 'Email'}
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
                  label={'User Name'}
                  handleChange={handleChange}
                />
                <Input
                  name="password"
                  label={'Password'}
                  handleChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  handleShowPassword={handleShowPassword}
                />
                {isSignup && (
                  <Input
                    name="confirmPassword"
                    label={
                      'Repeat password'
                    }
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
                className={classes.submit}>
                {isSignup
                  ? isLanguageEnglish
                    ? 'Sign up'
                    : 'Đăng kí'
                  : isLanguageEnglish
                  ? 'Sign in'
                  : 'Đăng nhập'}
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button onClick={switchMode}>
                    {isSignup
                      ? isLanguageEnglish
                        ? 'Already have an account? Sign in'
                        : 'Đã có tài khoản? Đăng nhập.'
                      : isLanguageEnglish
                      ? "Don't have an account? Sign Up"
                      : 'Chưa có tài khoản? Đăng kí.'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

export default Auth;
