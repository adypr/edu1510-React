import React from 'react';

export function Petcare(){
    return (
        <div className="pet_care_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="pet_thumb">
                            <img src="img/about/pet_care.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6">
                        <div className="pet_info">
                            <div className="section_title">
                                <h3><span>We care your pet </span> <br/>
                                    As you care</h3>
                                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do <br/> iusmod tempor
                                    incididunt ut labore et dolore magna aliqua. <br/> Quis ipsum suspendisse ultrices
                                        gravida. Risus commodo <br/>
                                            viverra maecenas accumsan.</p>
                                <a href="about.html" className="boxed-btn3">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}