import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Button, Input, Popover, Form } from 'antd';

const App = () =>{
    const [formVisible, setFormVisible] = useState(false);

    const content = (
        <Form name='basic' initialValues={{ remember: true }}>
            <div className="note">
                Leave your contacts and we will reach you first when the application is released!
            </div>
            <Form.Item
                label='Name'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input />
            </Form.Item>

            <Form.Item>
                <Button className="button}" size={'large'} onClick={() => setFormVisible(false)}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
    return (
        <>
            <div className="mainBg"></div>

            <div className="app">
                <div className="pageLimiter">
                    <div className="header">
                        <div className="logoWrapper">
                            <span className="logo" />
                            <span className="logoText">Cupido</span>
                        </div>
                        <div className="nav">
                            <div className="navItem">About</div>
                            <div className="navItem">Products</div>
                            <div className="navItem">Pricing</div>
                            <div className="navItem">Blog</div>
                        </div>
                    </div>
                </div>

                <div className="pageLimiter">
                    <div className="main">
                        <div className="mainInfo">
                            <div className="mainTitle">Dating app for couples and singles</div>
                            <div className="secondaryTextMain">
                                Explore your own sexuality with 100+ sexual preferences. Here everyone openly shares
                                their desires. Share yours.
                            </div>

                            <Popover content={content} trigger='click' visible={formVisible}>
                                <Button className="button" size={'large'} onClick={() => setFormVisible(true)}>
                                    Join Now
                                </Button>
                            </Popover>
                        </div>
                        <div className="mainImage" />
                    </div>

                    <div className="features">
                        <div className="featuresImage"></div>
                        <div className="title">Discover the key features</div>

                        <div className="cards">
                            <div className="card">
                                <div className="cardTitle">Flexible Configuration</div>

                                <div className="cardText">
                                    Explore your own sexuality with 100+ sexual preferences
                                </div>
                            </div>

                            <div className="card">
                                <div className="cardTitle">Confidentiality</div>

                                <div className="cardText">Explore incognito and hide from friends</div>
                            </div>

                            <div className="card">
                                <div className="cardTitle">Community & Moderation</div>

                                <div className="cardText">Create a digital polycule and come together</div>
                            </div>

                            <div className="card">
                                <div className="cardTitle">Video Conference</div>

                                <div className="cardText">
                                    Sex positive space for humans looking to explore sexuality with like-minded humans
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="users">
                    <div className="pageLimiter">
                        <div className="title">What Our Clients Speak?</div>
                        <div className="secondaryText">We have been working with clients around the world</div>

                        <div className="userCards">
                            <div className="userCard">
                                <div className="userCommentWrapper">
                                    <div className="userComment">
                                        <div className="commentTitle">Pleasure Time</div>

                                        <div className="commentText">
                                            “I am an open guy, I love life and I want to enjoy it! It's a pleasure to
                                            spend time with me!"
                                        </div>
                                    </div>

                                    <div className="userCommentArrow"></div>
                                </div>

                                <div className="userAvatar">
                                    <img src='/images/ethan.png' />
                                </div>

                                <div className="userName">Ethan Smith</div>
                            </div>

                            <div className="userCard">
                                <div className="userCommentWrapper">
                                    <div className="userComment">
                                        <div className="commentTitle">Fill Soul Void</div>

                                        <div className="commentText">
                                            “Work is my life, but there is emptiness in it now! There is no partner who
                                            will fill short moments of intimacy exclusively with pleasure, and sometimes
                                            it is difficult for me to get it! ”
                                        </div>
                                    </div>

                                    <div className="userCommentArrow"></div>
                                </div>

                                <div className="userAvatar">
                                    <img src='/images/alice.png' />
                                </div>

                                <div className="userName">Alice Cooper</div>
                            </div>

                            <div className="userCard">
                                <div className="userCommentWrapper">
                                    <div className="userComment">
                                        <div className="commentTitle">Mindblowing Service</div>

                                        <div className="commentText">
                                            "There is no lack for which there is no lover!"
                                        </div>
                                    </div>

                                    <div className="userCommentArrow"></div>
                                </div>

                                <div className="userAvatar">
                                    <img src='/images/chloe.png' />
                                </div>

                                <div className="userName"> Chloe Williams</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pageLimiter">
                    <div className="installApp">
                        <div className="installAppLeft">
                            <div className="installAppTitle">Install the app few easy steps</div>
                            <div className="installAppImage" />
                        </div>

                        <div className="installAppRight">
                            <div className="steps">
                                <div className="stepActive">
                                    <div className="stepImage">
                                        <img src='/images/01.png' className="stepImageInner" />
                                    </div>

                                    <div className="stepInfo">
                                        <div className="stepTitle">STEP 1</div>

                                        <div className="stepText">
                                            Download and install the app from play store or app store. The app will
                                            guide you through the configuration process. Live support is available to
                                            help you.
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="stepImage">
                                        <img src='/images/02.png' className="stepImageInner" />
                                    </div>

                                    <div className="stepInfo">
                                        <div className="stepTitle">STEP 2</div>

                                        <div className="stepText">
                                            Create your profile and customize your personal card with over 100 sexual
                                            preferences.
                                        </div>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="stepImage">
                                        <img src='/images/03.png' className="stepImageInner" />
                                    </div>

                                    <div className="stepInfo">
                                        <div className="stepTitle">STEP 3</div>

                                        <div className="stepText">
                                            Wait for a match and join the chat. Date together with your partner, a lover
                                            or a curious friend.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pageLimiter">
                    <div className="ready">
                        <div className="readyTitle">Ready?</div>

                        <div className="readyText">
                            Join Cupido Today! Fill out an early invitation request and get a special gift at the first
                            registration!
                        </div>

                        <Popover content={content} trigger='click' visible={formVisible}>
                            <Button className="button" size={'large'} onClick={() => setFormVisible(true)}>
                                Join Now
                            </Button>
                        </Popover>

                        <div className="readyImageWrapper">
                            <div className="readyImage"></div>
                            <div className="readyImagePhone"></div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="rights">© 2021 Cupido. All rights reserved</div>
                    <div className="logoWrapper">
                        <span className="logo" />
                        <span className="logoTextFooter">Cupido</span>
                    </div>
                    <div className="social">inst fb</div>
                </div>
            </div>
        </>
    );
};

export default App;
