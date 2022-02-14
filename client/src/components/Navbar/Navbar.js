import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

// import earth from '../../images/Earth.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import './styles.css';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} id="heading" variant="h2" align="center">Space Talks</Typography>
        {/* <img className={classes.image} id="earthlogo"  alt="icon" height="60" /> */}
        <div id="earth"></div>
      </div>
    </AppBar>
    <Toolbar className={classes.toolbar} id="signinbtn">
      {user?.result ? (
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
          <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
          <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button component={Link} className={classes.signin}  to="/auth" variant="contained" >Sign In</Button>
      )}
    </Toolbar>
    </>
  );
};

export default Navbar;
