import React from 'react';

export function Bradcam(props){
    return (
        <div className="bradcam_area breadcam_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bradcam_text text-center">
                            <h3>{props.bradcamTitle}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}