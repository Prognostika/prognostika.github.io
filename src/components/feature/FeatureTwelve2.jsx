import React, {Fragment} from 'react'

const FeatureTwelve2 = () => {
    return (
        <Fragment>
            <div className="block-style-nine color-two">
                <div className="title-style-three pb-10" data-aos="fade-up">
                    <div className="sc-title">WHY CHOOSE US</div>
                    <h2 className="main-title">Why <span>choose us</span> for your data needs.</h2>
                </div>
                {/* /.title-style-three */}
                <ul className="style-none list-item">
                    <li data-aos="fade-up">Harness advanced predictive analytics for reliable hard drive health monitoring.</li>
                    <li data-aos="fade-up" data-aos-delay={100}>Implement proactive maintenance solutions to minimize data loss and downtime.</li>
                    <li data-aos="fade-up" data-aos-delay={200}>Leverage our state-of-the-art technology for seamless integration and improved efficiency.</li>
                </ul>
            </div>
            {/* /.block-style-nine */}
        </Fragment>
    )
}

export default FeatureTwelve2