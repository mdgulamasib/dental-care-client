import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='container w-75 mt-5'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why is visiting the dentist so important?</Accordion.Header>
                    <Accordion.Body>
                        Visiting the dentist regularly will not only help keep your teeth and mouth healthy, but will also help keep the rest of your body healthy. Dental care is important because it:

                        Helps prevent tooth decay
                        Protects against periodontal (gum) disease, which can lead to tooth and bone loss
                        Prevents bad breath – brushing, flossing, and seeing the dentist regularly will help reduce the amount of bacteria in your mouth that causes bad breath
                        Gives you a more attractive smile and increases your self-confidence
                        Helps keep teeth looking bright by preventing them from becoming stained by food, drinks, and tobacco
                        Strengthens your teeth so that you can enjoy healthy, beautiful smiles for the rest of your life!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>My teeth feel fine. Do I still need to see a dentist?</Accordion.Header>
                    <Accordion.Body>
                        Your teeth may feel fine, but it’s still important to see the dentist regularly because problems can exist without you knowing. Your smile’s appearance is important, and your dentist can help keep your smile healthy and looking beautiful. With so many advances in dentistry, you no longer have to settle for stained, chipped, missing, or misshapen teeth. Today’s dentists offer many treatment choices that can help you smile with confidence, including:

                        Professional teeth whitening
                        Fillings that mimic the appearance of natural teeth
                        Tooth replacement and full smile makeovers
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What should I look for when choosing the right dentist for me?</Accordion.Header>
                    <Accordion.Body>
                        Choosing a dentist who “clicks” with you and your family is important, and you may wish to consider several dentists before making your final decision. During your first visit, you should be able to determine whether the dentist is right for you. During your appointment, consider the following:

                        Is the appointment schedule convenient?
                        Is the office easy to get to and close by?
                        Does the office appear to be clean and orderly?
                        Was your medical and dental history recorded and placed in a permanent file?
                        Does the dentist explain techniques for good oral health?
                        Is information about cost presented to you before treatment is scheduled?
                        Is your dentist a member of the ADA (American Dental Association)?
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr />
        </div>
    );
};

export default FAQ;