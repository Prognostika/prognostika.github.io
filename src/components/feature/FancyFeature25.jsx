import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const FeatureContent25 = [
    {
        icon: 'icon_36',
        title:'Enhanced Accuracy',
        desc: `Achieved a 7.5% increase in fault detection rate using advanced neural networks.`,
        arrows: 'bi bi-arrow-right',
        fade: 'fade-up',
        dataDelay: '',
    },
    {
        icon: 'icon_37',
        title:'Reduced False Alarms',
        desc: `Lowered the false alarm rate to 0.052%, minimizing unnecessary interventions.`,
        arrows: 'bi bi-arrow-right',
        fade: 'fade-up',
        dataDelay: '100',
    },
    {
        icon: 'icon_38',
        title:'Improved Predictive Maintenance',
        desc: `Enhanced predictive maintenance efficiency, reducing downtime by 20%.`,
        arrows: 'bi bi-arrow-right',
        fade: 'fade-up',
        dataDelay: '200',
    },
    {
        icon: 'icon_39',
        title:'Comprehensive Data Utilization',
        desc: `Leveraged 90 days of historical data for more accurate predictions.`,
        arrows: 'bi bi-arrow-right',
        fade: 'fade-up',
        dataDelay: '300',
    },
]

const FancyFeature25 = () => {
    return (
        <Fragment>
            <div className="row">
               {FeatureContent25.map((val, i)=>(
                   <div
                   key={i}
                   className="col-xl-3 col-sm-6 d-flex"
                   data-aos={val.fade}
                   data-aos-delay={val.delayDelay}>
                   <div className="block-style-ten color-two tran3s mt-30">
                       <div className="icon d-flex align-items-end"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                       <h6>
                           <Link to="/service-details">{val.title}</Link>
                       </h6>
                       <p>{val.desc}</p>
                       <Link to="/service-details" className="read-btn tran3s"><i className={val.arrow}/></Link>
                   </div>
                   {/* /.block-style-ten */}
               </div>
               ))}
            </div>
        </Fragment>
    )
}

export default FancyFeature25