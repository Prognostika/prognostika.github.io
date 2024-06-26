import React, {Fragment} from 'react';

const DetailsContent = [
    {
        bigImg: 'img_09',
        name: 'Phill Weston',
        desig: 'Product Designer',
        title: 'ABOUT ME',
        desc: `With a deep interest in Control Theory and Aircraft Systems, the work includes advanced UAV projects and innovative AI-driven hard drive failure prediction systems, blending blockchain technology for enhanced security and reliability.`,
        title2: 'Experties',
        desc2: `Specialized in UAV control algorithms, predictive maintenance AI, and blockchain applications, I focus on creating robust and innovative technology solutions in electronic information engineering.`,
        title3: 'FOLLOW & CONTACT',
        social: [
            {
                icon: 'fab fa-facebook-f',
                link: 'https://www.facebook.com/'
            }, {
                icon: 'fab fa-twitter',
                link: 'https://twitter.com/Phill6587'
            }, {
                icon: 'fab fa-telegram',
                link: 'https://t.me/phillweston'
            }, {
                icon: 'far fa-envelope',
                link: 'https://mail.google.com/'
            }
        ]

    }
]

const TeamDetailsOne = () => {
    return (
        <Fragment>
            {DetailsContent.map((val, i) => (
                <div key={i} className="main-bg d-lg-flex align-items-center">
                    <div className="img-meta"><img src={`images/team/${val.bigImg}.jpg`} alt="" className="w-100"/></div>
                    <div className="text-wrapper">
                        <div className="name">J{val.name}</div>
                        <div className="position">{val.desig}</div>
                        <h6>{val.title}</h6>
                        <p className="pb-30">{val.desc}</p>
                        <h6>Experties</h6>
                        <p className="pb-30">{val.desc2}</p>
                        <h6>{val.title2}</h6>
                        <ul className="social-icon style-none d-flex pt-15">
                            {val
                                .social
                                .map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link}><i className={val.icon}/></a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    {/* /.text-wrapper */}
                </div>
            ))}
            {/* /.team-details */}
        </Fragment>
    )
}

export default TeamDetailsOne