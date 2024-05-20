import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const TwentyFourContent = [
    {
        icon: 'icon_35',
        title: 'Health Monitoring',
        desc: `Transform raw SMART data into actionable insights for proactive maintenance.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: ''
    }, {
        icon: 'icon_08',
        title: 'Predictive Maintenance',
        desc: `Utilize machine learning to forecast hard drive failures and reduce downtime.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '100'
    }, {
        icon: 'icon_09',
        title: 'Data Engineers',
        desc: `Stay ahead by implementing predictive models that exceed reliability expectations.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '200'
    }, {
        icon: 'icon_10',
        title: 'Deep Learning',
        desc: `Access advanced tools for deep learning and scalable cloud computing solutions.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '100'
    }, {
        icon: 'icon_11',
        title: 'SMART Data Analysis',
        desc: `Discover hidden patterns in SMART data to improve hard drive health predictions.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '200'
    }, {
        icon: 'icon_12',
        title: 'Statistical Modeling',
        desc: `Deploy advanced models that learn and adapt to changing data for better forecasts.`,
        arrow: 'icon_13',
        fadeUp: 'fade-up',
        datadelay: '300'
    }
]

const FancyFeature24 = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {TwentyFourContent.map((val, i) => (
                    <div
                        key={i}
                        className="col-lg-4 col-sm-6 mb-40 xs-mb-30 d-flex"
                        data-aos={val.fade}
                        data-aos-delay={val.datadelay}>
                        <div className="block-style-four">
                            <div className="icon d-flex align-items-end justify-content-center"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                            <Link to="/service-details">
                                <h5>{val.title}</h5>
                            </Link>
                            <p>{val.desc}</p>
                            <Link to="/service-details" className="more-btn"><img src="images/icon/icon_13.svg" alt="" className="tran3s"/></Link>
                        </div>
                        {/* /.block-style-four */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeature24