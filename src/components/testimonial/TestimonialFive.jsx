import React,{Fragment} from 'react';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TestimonialContent = [
    {
        img: 'icon_34',
        desc: `Our data center operations have improved dramatically since we started using this predictive maintenance solution. It's incredibly efficient at identifying potential hard disk failures early, saving us from unexpected downtimes.`,
        name: 'Hasan Mahmud',
        desig: 'IT Infrastructure Manager'
    }, 
    {
        img: 'icon_34',
        desc: `Thanks to this solution, we can now predict hard drive issues with remarkable accuracy. It has enabled us to replace failing drives before they cause any disruptions, maintaining smooth and reliable service.`,
        name: 'Rashed Kabir',
        desig: 'Data Center Engineer'
    }, 
    {
        img: 'icon_34',
        desc: `Integrating this tool into our systems was straightforward and the impact has been significant. We've seen a noticeable drop in false alarms, which means we can dedicate our resources to addressing real problems more effectively.`,
        name: 'Zubayer Hasan',
        desig: 'Sr. Systems Administrator'
    }
]

const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const TestimonialFive = () => {
    return ( 
    <Fragment> 
        <Slider className="feedback_slider_four pt-70 lg-pt-50" {...settings} data-aos="fade-up">
            {TestimonialContent.map((val, i) => (
                <div key={i} className="item">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
                            <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                                <img src={`images/icon/${val.img}.svg`} alt="avatar" className="m-auto"/>
                                <p>{val.desc}</p>
                                <div className="cp-info">
                                    <h6>{val.name}</h6>
                                    <span>{val.desig}</span>
                                </div>
                            </div>
                            {/* /.feedback-block-four */}
                        </div>
                    </div>
                </div>
            ))}
        </Slider> 
    </Fragment>
  )
}


export default TestimonialFive