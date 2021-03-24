import React, { Component } from 'react'

export default class contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                    <div className="row">
                    <div className="col-md-7">
                        <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1XhS7FkjW6zQoIKzd2v1pFsCbq9-jhpde" style={{border: '0', width: '100%', height: '350px', frameborder: '0'}} allowFullScreen/>
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Contact Us</strong></h4>
                        <form action="mailto:someone@example.com" method="post">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Phone"/>
                            </div>
                            <textarea cols="30" rows="3" placeholder="Message" className="form-control"/>
                            <input className="btn btn-outline-primary mt-3" type="submit" value="Send"/>                            
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}
