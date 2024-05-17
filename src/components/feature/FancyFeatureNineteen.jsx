import React, {Fragment} from 'react'

const ProcessContent = [
    {
        num: 1,
        className: 'numb tran3s',
        heading: 'Collect the S.M.A.R.T. Data',
        desc: 'Collect various S.M.A.R.T. disk features from your hard drives in the background.',
        dataDelay: ''
    }, {
        num: 2,
        className: 'numb tran3s',
        heading: 'Analyze the Data',
        desc: 'Analyze the collected data using our pre-trained AI models to predict disk health.',
        dataDelay: '50'
    }, {
        num: 3,
        className: 'numb tran3s',
        heading: 'Display the Result',
        desc: 'Display the S.M.A.R.T. attributes and prediction results on the dashboard for your review and action.',
        dataDelay: '100'
    }
]

const FancyFeatureNineteen = () => {
    return (
        <Fragment>
            <div className="block-style-thirteen" data-aos="fade-right">
                <div className="title-style-three pb-15">
                    <div className="sc-title">WORK PROCESS</div>
                    <h2 className="main-title">How it <span>process</span> & works.</h2>
                </div>
                {/* /.title-style-three */}
                <ul className="style-none list-item">
                    {ProcessContent.map((val, i) => (
                        <li key={i} data-aos="fade-up" data-aos-delay={val.dataDelay}>
                            <div className={val.className}>{val.num}</div>
                            <h6>{val.heading}</h6>
                            <span>{val.desc}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* /.block-style-thirteen */}
        </Fragment>
    )
}

export default FancyFeatureNineteen