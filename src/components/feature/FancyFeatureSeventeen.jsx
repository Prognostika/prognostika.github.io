import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const ServiceContent = [
    {
        icon: "icon_31",
        title: 'Weighted Impact Analysis',
        desc: `Sets weights according to each attribute's impact, addressing data imbalance and automatically choose the most relevant features for prediction.`,
        arrow: 'icon_20',
        datadelay: '',
        dataAos: 'fade-right',
        className: ''
    }, {
        icon: "icon_32",
        title: 'Genetic Algorithm',
        desc: `Uses Genetic Algorithm to select the most relevant features for prediction based on the statistical specification of the data.`,
        arrow: 'icon_20',
        datadelay: '100',
        dataAos: 'fade-up',
        className: 'active'
    }, {
        icon: "icon_33",
        title: 'Advanced AI Algorithms',
        desc: `Utilizes TCN (Temporal Convolutional Network) for incremental iterative training and dataset verification.`,
        arrow: 'icon_20',
        dataDelay: '',
        dataAos: 'fade-left',
        className: ''
    }
]
const FancyFeatureSeventeen = () => {
    return ( 
    <Fragment> 
      <div className="row justify-content-center pt-30">
          {ServiceContent.map((val, i) => (
              <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                  <div
                      className={`block-style-twelve block-space mt-30 ${val.className}`}>
                      <div className="icon d-flex align-items-end"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                      <h5>
                          <Link to="/service-details">{val.title}</Link>
                      </h5>
                      <p>{val.desc}</p>
                      <Link to="/service-details" className="tran3s more-btn"><img src="images/icon/icon_20.svg" alt=""/></Link>
                  </div>
                  {/* /.block-style-twelve */}
              </div>
          ))}

      </div> 
    </Fragment>
  )
}

export default FancyFeatureSeventeen