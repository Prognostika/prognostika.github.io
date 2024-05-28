import React, {Fragment} from 'react';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';

const FaqContent = [
    {
        title: 'What is S.M.A.R.T monitoring?',
        desc: `S.M.A.R.T (Self-Monitoring, Analysis, and Reporting Technology) is a monitoring system included in computer hard disk drives and solid-state drives that detects and reports on various indicators of drive reliability, with the aim of enabling the anticipation of hardware failures. Scrutiny leverages this technology to help predict and prevent drive failures before they happen.`,
        expand: 'a'
    }, {
        title: 'How does Prognostika enhance smartd capabilities?',
        desc: `While smartd provides basic S.M.A.R.T monitoring, Prognostika enhances this by differentiating between critical and informational metrics, tracking historical S.M.A.R.T data to observe trends over time, and setting customized alert thresholds based on real-world failure rates. This approach provides a more comprehensive and proactive monitoring solution.`,
        expand: 'b'
    }, {
        title: 'Can Prognostika monitor all types of hard drives?',
        desc: `Prognostika supports a wide range of hard drives including ATA, IDE, SCSI-3, and certain RAID configurations. It uses smartctl to auto-detect connected drives and can override detections in complex setups. Whether you're using traditional HDDs or modern SSDs, Scrutiny provides detailed monitoring and analysis.`,
        expand: 'c'
    }, {
        title: 'How do I set up Prognostika with Docker?',
        desc: `Setting up Prognostika with Docker is straightforward. You can use the omnibus Docker image which includes both the web UI and the S.M.A.R.T metric collector. Specific device paths and capabilities need to be specified when running the Docker command to ensure Scrutiny has the necessary access to monitor your drives.`,
        expand: 'd'
    }, {
        title: 'How are notifications configured in Prognostika?',
        desc: `Prognostika allows you to set up notifications for drive health issues through various channels like email, webhooks, and popular messaging platforms such as Slack, Discord, and Telegram. Configuration can be done via the scrutiny.yaml file, where you specify the notification method and details.`,
        expand: 'e'
    }, {
        title: 'What are the system requirements for running Prognostika?',
        desc: `Prognostika can be run on various architectures including Linux (multiple distributions), macOS, and Windows (WIP). It supports both amd64 and ARM processors. The specific requirements depend on the deployment method, with Docker being the most straightforward option requiring minimal setup.`,
        expand: 'f'
    }
]

const FaqTwo = () => {
    return (
        <Fragment>
            <Accordion
                className="accordion-style-one"
                preExpanded={["d"]}
                allowZeroExpanded>
                {FaqContent.map((item, i) => (
                    <AccordionItem className="accordion-item" key={i} uuid={item.expand}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <button className="accordion-button" type="button">
                                    {item.title}
                                </button>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-body fadeInUp">
                            <p>
                                {item.desc}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Fragment>
    )
}

export default FaqTwo