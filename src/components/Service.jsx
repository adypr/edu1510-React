import React from 'react';
export function Service(){
    return (
        <div className="service_area">
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-lg-7 col-md-10">
                        <div className="section_title text-center mb-95">
                            <h3>Services for every dog</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single_service">
                            <div
                                className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                                <div className="service_icon">
                                    <img src="img/service/service_icon_1.png" alt="" />
                                </div>
                            </div>
                            <div className="service_content text-center">
                                <h3>Pet Boarding</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_service active">
                            <div
                                className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                                <div className="service_icon">
                                    <img src="img/service/service_icon_2.png" alt="" />
                                </div>
                            </div>
                            <div className="service_content text-center">
                                <h3>Healthy Meals</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single_service">
                            <div
                                className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                                <div className="service_icon">
                                    <img src="img/service/service_icon_3.png" alt="" />
                                </div>
                            </div>
                            <div className="service_content text-center">
                                <h3>Pet Spa</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}