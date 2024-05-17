import React,{Fragment} from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CountContent = [
    {
        mark: '',
        num: 500,
        text: 'k+',
        desc: 'Predicted disk failures',
        desc2: 'with our AI system',
    },
    {
        mark: '',
        num: 1.5,
        text: 'mil+',
        desc: 'Data loss incidents prevented by',
        desc2: 'our predictions',
    },
    {
        mark: '$',
        num: 20,
        text: 'mil+',
        desc: 'Saved in data recovery costs',
        desc2: 'thanks to early predictions',
    }
]

const CommonCounter = () => {
    return ( 
    <Fragment> 
        <div className="row justify-content-center">
            {CountContent.map((val, i)=>(
                <div
                key={i}
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={val.dataDelay}>
                <div className="counter-block-one text-center mb-20">
                    <div className="main-count">
                        <span className="counter">{val.mark}
                            <CountUp start={0} end={val.num} duration={1}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </span>{val.text}</div>
                    <p>{val.desc} <br/>{val.desc2}</p>
                </div>
            </div>
            ))}
        </div> 
    </Fragment>

    )}

export default CommonCounter