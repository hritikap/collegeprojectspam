import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import React from 'react';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../features/userSlice';
import { auth } from '../../firebase';
import { toggleSidebar } from '../../features/commonSlice';
import logo from './email.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Header({ searchQuery, setSearchQuery }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  const toggleSidebarFunction = () => {
    dispatch(toggleSidebar());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <IconButton>
          <MenuIcon onClick={toggleSidebarFunction} />
        </IconButton>
        <img
          style={{
            width: '50px',
            heigth: '25px',
            marginLeft: '25px',
            marginRight: '15px',
          }}
          src={logo}
          alt='gmail icon'
        />
        <h2> EmailSpamDetector</h2>
      </div>
      <div className={styles.header__middle}></div>

      <div className={styles.header__right}>
        <Avatar name='avatarMenu' onClick={handleClick} src={user?.photoUrl} />
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Avatar src={user?.photoUrl} />
          </MenuItem>
          <MenuItem>{user.displayName}</MenuItem>
          <MenuItem>{user.email}</MenuItem>
          <MenuItem name='logoutBtnK' onClick={signOut}>
            Sign Out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
