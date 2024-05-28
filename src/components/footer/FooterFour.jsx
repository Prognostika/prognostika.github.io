import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const SocialContent = [
    {
        icon: 'fab fa-facebook-f',
        routerPath: '#'
    }, {
        icon: 'fab fa-twitter',
        routerPath: '#'
    }, {
        icon: 'fab fa-linkedin-in',
        routerPath: '#'
    }
];
const PageContent = [
    {
        name: 'Home',
        routerPath: '/'
    }, {
        name: 'Pricing',
        routerPath: '/price'
    }, {
        name: 'About us',
        routerPath: '/about-two'
    }, {
        name: 'Service',
        routerPath: '/service-one'
    }, {
        name: 'Blog',
        routerPath: '/blog-grid'
    }
];
const ServiceContent = [
    {
        name: 'Key Benefits',
        routerPath: '/service-one'
    }, {
        name: 'Performance Metrics',
        routerPath: '/service-two'
    }, {
        name: 'Project Outcomes',
        routerPath: '/service-details'
    }, {
        name: 'Testimonials',
        routerPath: '/testimonial'
    }, {
        name: 'Questions & Answers',
        routerPath: '/faq'
    }
];
const LegalContent = [
    {
        name: 'Terms of use',
        routerPath: '/'
    }, {
        name: 'Terms & conditions',
        routerPath: '/'
    }, {
        name: 'Privacy policy',
        routerPath: '/'
    }, {
        name: 'Cookie policy',
        routerPath: '/'
    }
];

const FooterFour = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-4 footer-intro mb-40">
                    <div className="logo">
                        <Link to="/"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                    </div>
                    <p>Prognostika provides advanced, secure hard drive health prediction, essential for proactive data management and reducing data loss risk.</p>
                    <ul className="d-flex social-icon style-none">
                        {SocialContent.map((val, i) => (
                            <li key={i}>
                                <a href={val.routerPath}><i className={val.icon}/></a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-4 ms-auto mb-30">
                    <h5 className="footer-title">Links</h5>
                    <ul className="footer-nav-link style-none">
                        {PageContent.map((val, i) => (
                            <li key={i}>
                                <Link to={val.routerPath}>{val.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-4 mb-30">
                    <h5 className="footer-title">Services</h5>
                    <ul className="footer-nav-link style-none">
                        {ServiceContent.map((val, i) => (
                            <li key={i}>
                            <Link to={val.routerPath}>{val.name}</Link>
                        </li>
                        ))}
                       
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 mb-30">
                    <h5 className="footer-title">Legal</h5>
                    <ul className="footer-nav-link style-none">
                        {LegalContent.map((val, i) => (
                            <li key={i}>
                            <Link to={val.routerPath}>{val.name}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default FooterFour