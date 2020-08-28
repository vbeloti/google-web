import React from 'react';
import { Link } from 'react-router-dom';

import { Apps } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import Search from '../Search';

import googleLogo from '../../assets/img/google.png';

import './styles.css';

const Home: React.FC = () => (
  <div className="home">
    <div className="home__header">
      <div className="home__headerLeft">
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>

      <div className="home__headerRight">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <Apps />
        <Avatar />
      </div>
    </div>

    <div className="home__body">
      <img
        src={googleLogo}
        alt="Google logo"
      />
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  </div>
);

export default Home;
