"use client"

import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { fadeIn, navVariants } from '@/utils/motion';
import { Separator } from '@/components/ui/separator';

function PST() {
    const [responses, setResponses] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const questions = [
        "Do familiar surroundings sometimes seem strange, confusing, threatening or unreal to you?",
        "Have you heard unusual sounds like banging, clicking, hissing, clapping or ringing in your ears?",
        "Do things that you see appear different from the way they usually do?",
        "Have you had experiences with telepathy, psychic forces, or fortune telling?",
        "Have you felt that you are not in control of your own ideas or thoughts?",
        "Do you have strong feelings or beliefs about being unusually gifted or talented in some way?",
        "Do you sometimes get strange feelings on or just beneath your skin, like bugs crawling?",
        " Do you sometimes feel suddenly distracted by distant sounds that you are not normally aware of?",
        "Have you been confused at times whether something you experienced was real or imaginary?",
        "Are your thoughts sometimes so strong that you can almost hear them?",
        "Have you seen unusual things like flashes, flames, blinding light, or geometric figures?"
    ];

    const handleResponse = (index, response) => {
        setResponses({
            ...responses,
            [index]: response
        });
    };

    const calculateScore = () => {
        let score = 0;
        for (const response of Object.values(responses)) {
            if (response === "yes") {
                score++;
            }
        }
        return score;
    };

    const closeModal = () => {
        setModalIsOpen(false);
        // Navigate to next page
        // history.push('/next-page'); // Replace '/next-page' with the actual URL of the next page

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setModalIsOpen(true);
        setResponses({});

    };

    const score = calculateScore();
    const threshold = 4;
    const hasPTSD = score > threshold;

    return (
        <div className="container mx-auto mt-8">
            <section>
                <motion.div variants={navVariants} initial='hidden' whileInView='show'>
            <div className="bg-green-700 p-[30px] rounded-lg">
                <h2 className="text-center h2-medium text-white">Psychosis & Schizophrenia Test</h2></div>
                </motion.div>
            </section>

            <section>
                <motion.div variants={navVariants} initial='hidden' whileInView='show'>
            <p className='text-center p-regular-18 py-2 mt-2'>Psychosis is a condition in which someone has lost touch with reality. Its two main symptoms are hallucinations and delusions. Psychosis can have several causes, such as mental health disorders, medical conditions, or substance use. Schizophrenia is a mental health disorder that includes periods of psychosis.</p>
            <br />
            <div className="text-left">
                <p className='p-regular-18 mt-2'>In the past few weeks, have you had the following thoughts, feelings, or experiences? Check <span className='font-semibold'>“yes”</span> or <span className='font-semibold'>“no”</span> for each item.</p> <br />

               <p className='p-regular-18 mt-2'>Do not include experiences that occur only while under the influence of alcohol, drugs or medications that were not prescribed to you.</p> 
            </div>
            <p className="p-regular-18 mt-2"><span className='font-bold'>Have you ever experienced this kind of event?</span></p>
            <p className='p-regular-18 mt-2'>Answer the following questions with <span className="font-bold">Yes</span> or <span className="font-bold">No:</span></p>

            </motion.div>
            </section>

            <motion.div className='mt-4' variants={fadeIn('right','tween',0.2,1)} initial='hidden' whileInView='show'>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">
                {questions.map((question, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-lg font-semibold mb-2">{question}</p>
                        <button
                            type="button"
                            onClick={() => handleResponse(index, "yes")}
                            style={{ marginRight: '20px', padding: '10px', border: '3px solid #b2b2b2', width: '80px', borderRadius: '8px', background: responses[index] === 'yes' ? 'green' : 'white' }}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            onClick={() => handleResponse(index, "no")}
                            style={{ marginRight: '20px', padding: '10px', border: '3px solid #b2b2b2', width: '80px', borderRadius: '8px', background: responses[index] === 'no' ? 'red' : 'white' }}
                        >
                            No
                        </button>
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10">Submit</button>
            </form>
            </motion.div>

             <section>
                <motion.div className='mt-2' variants={fadeIn('right','tween',0.2,1)} initial='hidden' whileInView='show'>
                 <p className='p-bold-24'>Source:</p>

                 <p className ='p-regular-14 mt-5'>Loewy, Rachel L., et al. (2011). Psychosis risk screening with the Prodromal Questionnaire—Brief Version (PQ-B). Schizophrenia Research 12(1) pp. 42-46.</p>

                 <p className='p-regular-14 mt-5'>Screenings with missing answers cannot be scored. A positive score on the Prodromal Questionnaire-Brief Version (PQ-B) suggests the need for further evaluation by a qualified health (M.D., R.N.) or mental health (Ph.D., Psy.D., LCSW) professional who is trained in recognizing the early signs of psychosis.  The PQ-B is designed to test for Prodrome or Ultra high-risk of Psychosis and is considered the first step in a two-stage screening process.</p>

                <p className='p-regular-14 mt-5'><span className='font-bold'>Please note:</span> Online screening tools are not diagnostic instruments. You are encouraged to share your results with a physician or healthcare provider. </p>

                <Separator className='border border-gray-500 mt-2'/>
                </motion.div>
              </section> 

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >


                {submitted && (
                    <div className="">
                        <h2 className="font-semibold">Score: {score}</h2>
                        {hasPTSD && <h1>Based on your responses, you may have Psychosis & Schizophrenia Disorder. Please seek professional help for further evaluation.</h1>}
                        {!hasPTSD && <h1>Based on your resposes, you may <span className="font-bold">not</span> have Psychosis & Schizophrenia Disorder. Still you can seek professional help for further evaluation!</h1>}
                        <br />
                        {/* <h2>Responses:</h2>
                        <ul>
                            {Object.entries(responses).map(([index, response]) => (
                                <li key={index}>{questions[index]}: {response}</li>
                            ))}
                        </ul> */}

                    </div>
                )}
                <div className="gap-8 flex flex-row">
                <button className="py-4 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-10" onClick={closeModal}>Close</button>

                <button className="py-4 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-10" onClick="">YouTube</button>
                </div>
            </Modal>


        </div>
    );
}

export default PST;