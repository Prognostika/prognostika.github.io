import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import TopNavFour from '../../../../components/header/TopNavFour';
import CircularProgress from '../../../../components/skill/CircularProgress';
import BlockStyle15 from '../../../../components/blockStyle/BlockStyle15';
import BannerFive from '../../../../components/short-banner/BannerFive';
import NewsLetterForm from '../../../../components/form/NewsLetterForm';
import FooterFour from '../../../../components/footer/FooterFour';
import CopyRightFour from '../../../../components/footer/CopyRightFour';

const ServicesDetails = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Project Outcomes || Prognostika - The 1st AI-Powered Hard Drive Health Prediction System</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <div className="container">
                        <h2 className="intro-title">Machine <span>Learning</span>
                        </h2>
                        <ul className="page-breadcrumb style-none d-flex">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="current-page">Service Details</li>
                        </ul>
                    </div>
                    <img src="images/assets/ils_20.svg" alt="" className="shapes illustration-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div
                    className="service-details position-relative mt-160 mb-150 lg-mt-100 lg-mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 order-lg-1">
                                <div className="service-details-meta ps-lg-5 ms-xxl-4">
                                    <h2 className="main-title">Delivering Insights for Reliable Data Center Operations</h2>
                                    <p>In modern data centers, storage system failures are a major contributor to downtimes and maintenance costs. 
                                        Our solution leverages advanced machine learning techniques to predict hard disk failures, enabling timely maintenance and significantly reducing their impact. 
                                        By predicting failures before they occur, we ensure smooth and efficient operations.</p>
                                    <img src="images/media/img_13.jpg" alt="" className="main-img-meta"/>
                                    <h3 className="sub-title">Technology we use</h3>
                                    <p>We utilize cutting-edge machine learning models to analyze time series data from hard disks. 
                                        Our approach focuses on efficiency and accuracy, significantly outperforming traditional methods in predicting failures. 
                                        The technology we employ is designed to handle large-scale data and provide precise insights for proactive maintenance.</p>
                                    <div>
                                        <BlockStyle15/>
                                    </div>
                                    <div className="mt-75 lg-mt-50">
                                        <div className="row gx-xxl-5">
                                            <div className="col-lg-6">
                                                <h3 className="sub-title">Our Goal</h3>
                                                <ul className="style-none list-item md-mb-40">
                                                    <li>Enhance fault detection rate while minimizing false alarms.</li>
                                                    <li>Utilize long-term historical data for accurate predictions.</li>
                                                    <li>Implement advanced re-sampling techniques to manage class imbalance.</li>
                                                    <li>Provide scalable and efficient solutions for large data centers.</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <h3 className="sub-title">The Challange</h3>
                                                <p>The primary challenge in predictive maintenance is handling the significant imbalance between failed and non-failed disk data. 
                                                    Our solution addresses this by employing the Synthetic Minority Over-sampling Technique (SMOTE), which balances the dataset and improves model performance. 
                                                    By leveraging this technique, we achieve higher accuracy in failure predictions and reduce the likelihood of unexpected downtimes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-60 mb-20 lg-mt-40 lg-mb-10">
                                        <div className="row gx-xxl-5">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="block-style-fifteen mb-30">
                                                    <div className="d-flex align-items-center">
                                                        <div className="text">
                                                            <h6>Success Ratio</h6>
                                                            <p>Our solution accurately predicts hard disk failures, ensuring timely interventions and reducing downtime.</p>
                                                            <a href="#" className="details-btn">Details</a>
                                                        </div>
                                                        {/* /.text */}
                                                        <div className="circle_percent" data-percent={89}>
                                                            <div className="circle_inners position-relative">
                                                                {/* <div className="round_per"/>
                                                                 */}
                                                                <CircularProgress number="89"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.block-style-fifteen */}
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="block-style-fifteen mb-30">
                                                    <div className="d-flex">
                                                        <div className="text">
                                                            <h6>Failure Ratio</h6>
                                                            <p>We keep a low false alarm rate, minimizing unnecessary maintenance actions and focusing on real issues.</p>
                                                            <a href="#" className="details-btn">Details</a>
                                                        </div>
                                                        {/* /.text */}
                                                        <div className="circle_percent" data-percent={5}>
                                                            <div className="circle_inners position-relative">
                                                                {/* <div className="round_per"/> */}
                                                                <CircularProgress number="5"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.block-style-fifteen */}
                                            </div>
                                        </div>
                                    </div>
                                    <p>Our project leverages advanced machine learning to efficiently and accurately predict hard disk failures in large-scale data centers. 
                                        By improving fault detection rates and minimizing false alarms using techniques like SMOTE, we address data imbalance challenges and ensure timely interventions. 
                                        With an 89% success rate and a low 5% false alarm rate, our solution reduces downtime and enhances data center reliability and efficiency.</p>
                                </div>
                                {/* /.service-details-meta */}
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
                                <div className="service-sidebar md-mt-60">
                                    <div className="service-category mb-40">
                                        <ul className="style-none">
                                            <li className="current-page">
                                                <a href="#">Predictive Maintenance</a>
                                            </li>
                                            <li>
                                                <a href="#">Machine Learning</a>
                                            </li>
                                            <li>
                                                <a href="#">Data Analysis</a>
                                            </li>
                                            <li>
                                                <a href="#">Time Series Analysis</a>
                                            </li>
                                            <li>
                                                <a href="#">Failure Prediction</a>
                                            </li>
                                            <li>
                                                <a href="#">Proactive Maintenance</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.service-category */}
                                    <div className="sidebar-quote mb-50">
                                        <ul className="style-none d-flex justify-content-center rating">
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                            <li><i className="bi bi-star-fill"/></li>
                                        </ul>
                                        <p>They understand our needs thoroughly and provide valuable insights that have helped us improve our processes.</p>
                                        <div className="name">Rashed Kabir,
                                            <span>Data Center Engineer</span>
                                        </div>
                                    </div>
                                    {/* /.sidebar-quote */}
                                    <div className="download-btn-group">
                                        <a href="#" className="d-flex tran3s mb-15">
                                            <i className="bi bi-file-earmark-pdf"/>
                                            <span>Download PDF</span>
                                        </a>
                                        <a href="#" className="d-flex tran3s mb-15">
                                            <i className="bi bi-file-earmark-text"/>
                                            <span>Company Report</span>
                                        </a>
                                    </div>
                                </div>
                                {/* /.service-sidebar */}
                            </div>
                        </div>
                    </div>
                    <img src="images/shape/shape_48.svg" alt="" className="shapes bg-shape"/>
                </div>
                {/* /.service-details */}

                <div className="fancy-short-banner-five">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerFive/>
                        </div>
                        {/* /.bg-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-short-banner-five */}

                <div className="footer-style-four space-fix-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                        </div>
                                        {/* /.title-style-four */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <NewsLetterForm />
                                            <p>We only send interesting and relevant emails.</p>
                                        </div>
                                        {/* /.subscribe-form */}
                                    </div>
                                </div>
                            </div>
                            {/* /.subscribe-area */}
                            <FooterFour />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                </div>
                {/* /.footer-style-four */}

            </div>
        </Fragment>
    )
}

export default ServicesDetails