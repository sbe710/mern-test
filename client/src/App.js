import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import PrivateRoute from './components/routing/PrivateRoute';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import './App.css';
import Post from './components/post/Post';

if (localStorage.getItem('token')) {
    setAuthToken(localStorage.getItem('token'))
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <div className="app">
            <div className="header">
                <div className="logo" />
                <div className="nav">
                    <div className="navItem">About</div>
                    <div className="navItem">Products</div>
                    <div className="navItem">Pricing</div>
                    <div className="navItem">Blog</div>
                </div>
            </div>

            <div className="main">
                <div className="mainInfo">
                    <div className="title">Dating app for couples and singles</div>
                    <div className="secondaryText">
                        Explore your own sexuality with 100+ sexual preferences. Here everyone openly shares their
                        desires. Share yours.
                    </div>
                    <button className="button">Join Now</button>
                </div>
                <div className="mainImage" />
            </div>

            <div className="features">
                <div className="title">Discover the key features</div>

                <div className="cards">
                    <div className="card">
                        <div className="cardTitle">Flexible Configuration</div>

                        <div className="cardText">Explore your own sexuality with 100+ sexual preferences</div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">Flexible Configuration</div>

                        <div className="cardText">Explore your own sexuality with 100+ sexual preferences</div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">Flexible Configuration</div>

                        <div className="cardText">Explore your own sexuality with 100+ sexual preferences</div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">Flexible Configuration</div>

                        <div className="cardText">Explore your own sexuality with 100+ sexual preferences</div>
                    </div>
                </div>
            </div>

            <div className="users">
                <div className="title">What Our Clients Speak?</div>
                <div className="secondaryText">We have been working with clients around the world</div>



            </div>
        </div>
    )}

export default App;
