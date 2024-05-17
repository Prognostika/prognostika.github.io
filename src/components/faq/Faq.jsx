import React, {Fragment} from 'react';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';

const FaqContent = [
    {
        title: 'What is your predictive maintenance solution for data centers?',
        desc: `Our predictive maintenance solution involves continuously monitoring disk operations in data centers and raising alarms when a failure is predicted, allowing for timely maintenance actions to reduce downtime and costs.`,
        expand: 'a'
    },
    {
        title: 'How does your solution predict hard disk failures?',
        desc: `We use machine learning techniques to analyze data collected from hard disks. Our solution employs Temporal Convolutional Networks (TCNs) which effectively utilize long-term historical data to predict failures with high accuracy.`,
        expand: 'b'
    },
    {
        title: 'What are the advantages of using Temporal Convolutional Networks (TCNs) for failure prediction?',
        desc: `TCNs outperform traditional models like Random Forests and Recurrent Neural Networks by providing better fault detection rates and lower false alarm rates. They are particularly effective at handling long-term dependencies in the data, making them ideal for failure prediction.`,
        expand: 'c'
    },
    {
        title: 'How do you handle the imbalance between failed and non-failed disk data?',
        desc: `We address class imbalance using the Synthetic Minority Over-sampling Technique (SMOTE), which generates synthetic samples for the minority class (failed disks). This balances the dataset and improves the model's ability to detect failures accurately.`,
        expand: 'd'
    },
    {
        title: 'What key features does your solution analyze to predict hard disk failures?',
        desc: `Our solution analyzes various SMART attributes such as temperature, seek errors, read errors, and reallocated sectors. We apply a feature selection process to focus on the most predictive features, enhancing the accuracy of our failure predictions.`,
        expand: 'e'
    }
]

const Faq = () => {
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

export default Faq