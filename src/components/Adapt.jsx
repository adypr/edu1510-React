import React from 'react';

export function Adapt(){
    return (
        <div className="adapt_area">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5">
                        <div className="adapt_help">
                            <div className="section_title">
                                <h3><span>We need your </span>
                                    help Adopt Us</h3>
                                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do iusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                                <a href="contact.html" className="boxed-btn3">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="adapt_about">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single_adapt text-center">
                                        <img src="img/adapt_icon/1.png" alt="" />
                                            <div className="adapt_content">
                                                <h3 className="counter">452</h3>
                                                <p>Pets Available</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single_adapt text-center">
                                        <img src="img/adapt_icon/3.png" alt="" />
                                            <div className="adapt_content">
                                                <h3><span className="counter">52</span>+</h3>
                                                <p>Pets Available</p>
                                            </div>
                                    </div>
                                    <div className="single_adapt text-center">
                                        <img src="img/adapt_icon/2.png" alt="" />
                                            <div className="adapt_content">
                                                <h3><span className="counter">52</span>+</h3>
                                                <p>Pets Available</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}