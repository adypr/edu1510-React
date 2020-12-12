import React from 'react';

export function Team(){
    return (
        <div className="team_area">
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-lg-6 col-md-10">
                        <div className="section_title text-center mb-95">
                            <h3>Our Team</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single_team">
                            <div className="thumb">
                                <img src="img/team/1.png" alt="" />
                            </div>
                            <div className="member_name text-center">
                                <div className="mamber_inner">
                                    <h4>Rala Emaia</h4>
                                    <p>Senior Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_team">
                            <div className="thumb">
                                <img src="img/team/2.png" alt="" />
                            </div>
                            <div className="member_name text-center">
                                <div className="mamber_inner">
                                    <h4>jhon Smith</h4>
                                    <p>Senior Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_team">
                            <div className="thumb">
                                <img src="img/team/3.png" alt="" />
                            </div>
                            <div className="member_name text-center">
                                <div className="mamber_inner">
                                    <h4>Rala Emaia</h4>
                                    <p>Senior Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}