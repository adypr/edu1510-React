import React from 'react';

export class Contacts extends React.Component {
    constructor() {
        super();
        this.state={}
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState( {
            [name]: value
        });
        console.log(name, value);
    }

    sendMessage(event) {
        let formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("subject", this.state.subject);
        formData.append("message", this.state.message);
        fetch('http://macaneju.beget.tech/php/sendMailReact.php', {
            method: "POST",
            body: formData,
            mode: 'no-cors'
        }).then(response=>response.text()).then(result=>console.log(result))
        event.preventDefault();
    }

    render() {
        return (
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-contact contact_form" onSubmit={this.sendMessage} method="post"
                                  id="contactForm" noValidate="novalidate">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                        <textarea className="form-control w-100" name="message" id="message" cols="30"
                                                  rows="9"
                                                  placeholder="Enter Message"
                                                  value={this.state.message} onChange={this.handleChange} ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="name" id="name" type="text"
                                                   placeholder="Enter your name"
                                                   value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="email" id="email" type="email"
                                                   placeholder="Email"
                                                   value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" name="subject" id="subject" type="text"
                                                   placeholder="Enter Subject"
                                                   value={this.state.subject} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-home"></i></span>
                                <div className="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                <div className="media-body">
                                    <h3>+1 253 565 2365</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
