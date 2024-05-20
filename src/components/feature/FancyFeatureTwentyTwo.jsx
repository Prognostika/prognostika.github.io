import React, {Fragment} from 'react';

const VisionContent = [
    {
        title: 'Our History',
        desc: `Prognostika has a rich history of innovation in predictive maintenance, leveraging advanced AI and machine learning to transform data into actionable insights, ensuring the highest quality and reliability for our clients.`,
        fade: 'fade-up',
        dataDelay: ''
    }, {
        title: 'Our Mission',
        desc: `Our mission is to provide unparalleled predictive analytics solutions that enhance data security and operational efficiency, empowering businesses to proactively manage their data centers and minimize downtime.`,
        fade: 'fade-up',
        dataDelay: '100'
    }, {
        title: 'Our Vision',
        desc: `Our vision is to lead the industry in predictive maintenance technology, continuously evolving our AI-driven solutions to adapt to changing data environments and ensure seamless, reliable operations for all our clients.`,
        fade: 'fade-up',
        dataDelay: '200'
    }
]

const FancyFeatureTwentyTwo = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {VisionContent.map((val, i) => (
                    <div
                        key={i}
                        className="col-lg-4 col-sm-6 d-flex"
                        data-aos={val.fade}
                        data-aos-delay={val.dataDelay}>
                        <div className="block-style-fourteen mt-35">
                            <h5>{val.title}</h5>
                            <p>{val.desc}</p>
                        </div>
                        {/* /.block-style-fourteen */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeatureTwentyTwo