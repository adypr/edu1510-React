import React from 'react';
import {NavLink} from "react-router-dom";

export function Header(){
    return (
        <header>
            <div className="header-area ">
                <div className="header-top_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="short_contact_list">
                                    <ul>
                                        <li><a href="#">+880 4664 216</a></li>
                                        <li><a href="#">Mon - Sat 10:00 - 7:00</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-4 ">
                                <div className="social_media_links">
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-pinterest-p"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3">
                                <div className="logo">
                                    <NavLink exact to="/">
                                        <img src="img/logo.png" alt="" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><NavLink exact to="/">home</NavLink></li>
                                            <li><NavLink to="/about">about</NavLink></li>
                                            <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><NavLink to="/blog">blog</NavLink></li>
                                                    <li><NavLink to="/single-blog">single-blog</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><NavLink to="/elements">elements</NavLink></li>

                                                </ul>
                                            </li>
                                            <li><NavLink to="/services">services</NavLink></li>
                                            <li><NavLink to="/contacts">Contact</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}