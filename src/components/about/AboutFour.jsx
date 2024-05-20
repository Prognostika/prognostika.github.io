import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const AboutFour = () => {
    return (
        <Fragment>
            <div className="block-style-two" data-aos="fade-left">
                <div className="title-style-one">
                    <div className="sc-title-four">WHO WE ARE</div>
                    <h2 className="main-title">Leading AI Solutions for Your Data Management Needs.
                    </h2>
                </div>
                {/* /.title-style-one */}
                <p className="pt-10 pb-20 lg-pb-10">
                    Our AI technology provides cutting-edge solutions for optimal business performance and helps you achieve your data management goals.</p>
                <ul className="style-none list-item color-rev">
                    <li>High precision in feature prediction.</li>
                    <li>Dynamically adjusted feature selection and weights.</li>
                    <li>Automatically renewed training data for continuous learning.</li>
                    <li>Enhanced system adaptability for various data environments.</li>
                </ul>
                <Link to="/contact" className="btn-one mt-30">Contact us</Link>
            </div>
        </Fragment>
    )
}

export default AboutFour