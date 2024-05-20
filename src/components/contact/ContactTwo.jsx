import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const ContactTwo = () => {
    return (
        <Fragment>
            <div className="row align-items-center">
                <div className="col-md-6 order-md-last">
                    <div className="block-style-nine ps-lg-5 ms-xxl-3">
                        <div className="title-style-three" data-aos="fade-up">
                            <div className="sc-title">Contact us</div>
                            <h2 className="main-title">Get Ready to <span>Started.</span> It’s Fast &amp; Easy.</h2>
                        </div>
                        {/* /.title-style-three */}
                        <p className="pt-20 pb-30" data-aos="fade-up" data-aos-delay={80}>
                            Reach out to us for any inquiries or support. Our team is here to assist you with advanced AI solutions for your data management needs. We are committed to providing fast and efficient service to help you achieve your business goals.</p>
                        <Link
                            to="/contact"
                            className="btn-eight"
                            data-aos="fade-up"
                            data-aos-delay={130}>Send Message</Link>
                    </div>
                    {/* /.block-style-nine */}
                </div>
                <div className="col-md-6 order-md-first" data-aos="fade-right">
                    <div className="illustration-holder position-relative d-inline-block sm-mt-60">
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                        <img src="images/assets/ils_19.svg" alt="" className="transform-img-meta"/>
                        </Tilt>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactTwo