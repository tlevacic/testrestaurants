import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <FooterCon className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>Food ordering app</h4>
                            <ul className="categories-footer">
                                <p className="pp">Ul. Svetog Roka 99, Cernik</p>
                                <p>Phone: 091 620 6207</p>
                                <p>Email: marko.vitkovic@outlook.com</p>
                                <p>Share and Connect With Us!</p>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>Main Categories</h4>
                            <div className="categories-footer">
                                <p className="pp"><Link to="/">Home</Link></p>
                                <p><Link to="/food" className="dark-font">Food</Link></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>Socials</h4>
                            <ul className="categories-footer">
                                <p className="pp"><a href="https://www.facebook.com/marko.vitkovicbojka">Facebook</a></p>
                                <p><a href="https://twitter.com/hunte_ghost">Twitter</a></p>
                                <p><a href="https://github.com/MarkoVitkovic">GitHub</a></p>
                                <p><a href="https://outlook.live.com/owa/">Email</a></p>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer">
                            <h4>Subscribe</h4>
                            <div className="footer-text">
                                <p>Get 20% off at our hotels and food.</p>
                                <input type="email" className="form-control" required placeholder="Enter email"></input>
                                <p>
                                    I want emails from Nova Gradiska with travel and product information, promotions, advertisements, third-party offers, and surveys. I can unsubscribe any time using the unsubscribe link at the end of all emails. 
                                    <a href="/contactus"> Contact Us here.</a>
                                </p>
                                <Link to="/subscribe"><button type="button" className="btn btn-outline-primary pr-5 pl-5 rounded-pill">Subscribe Here</button></Link>
                            </div>
                        </div>
                    </div>
                <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Nova Gradiska - All Rights Reserved
                        </p>
                </div>
                </div>
            </div>
        </FooterCon>
    )
}
const FooterCon = styled.footer`
.footer-middle{
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    padding-top: 3rem;
    color: var(--dark);
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 1rem;
    text-align: center;
}
ul li a{
    color: var(--dark);
}
ul li a:hover{
    color:var(--mainGray);
    text-decoration: none;
}
`;
