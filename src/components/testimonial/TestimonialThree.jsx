import React, {Fragment} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderThree = [
    {
        img: 'img_05',
        icon: 'icon_15',
        desc: `Designing algorithms for Prognostika has been rewarding. Our models greatly improve hard drive failure predictions, enhancing proactive maintenance.`,
        name: 'Phill Weston',
        desig: 'Machine Learning Developer, Prognostika Project.'
    }, {
        img: 'img_06',
        icon: 'icon_15',
        desc: `Developing backend services for Prognostika has been exciting. We ensure seamless data integration and real-time analysis, boosting system reliability.`,
        name: 'iPapaw Cola',
        desig: 'Backend Service Developer, Prognostika Project.'
    }, {
        img: 'img_07',
        icon: 'icon_15',
        desc: `As a data scientist, I’ve seen how our data analytics transform hard drive health monitoring. We’ve achieved high fault detection and low false alarms.`,
        name: 'Tommy Vercetti',
        desig: 'Data Scientist, Prognostika Project.'
    }
]

const settings3 = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
};
const TestimonialThree = () => {

    return (
        <Fragment>
            <Slider className="feedback_slider_three" {...settings3}>
                {SliderThree.map((val, i) => (
                    <div key={i} className="item">
                        <div className="feedback-block-three d-md-flex">
                            <div className="img-meta">
                                <img src={`images/media/${val.img}.jpg`} alt=""/>
                            </div>
                            <div className="text-wrapper">
                                <div className="icon d-flex justify-content-center align-items-center"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                                <p>{val.desc}</p>
                                <div className="name">
                                    <h6>{val.name}</h6>
                                    <span>{val.desig}</span>
                                </div>
                                {/* /.name */}
                            </div>
                            {/* /.text-wrapper */}
                        </div>
                        {/* /.feedback-block-three */}
                    </div>
                ))}
            </Slider>
            {/* /.feedback_slider_three */}
        </Fragment >
    )
}

export default TestimonialThree