"use client"

import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { fadeIn, navVariants } from '@/utils/motion';
import { Separator } from '@/components/ui/separator';

const Depress3 = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // const history = useNavigate();

    const handleChange = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculate depression level based on answers
        let score = Object.values(answers).reduce((acc, val) => acc + parseInt(val), 0);
        let depressionLevel = '';
        if (score <= 10) {
            depressionLevel = 'No depression';
        }
        else if (score <= 20) {
            depressionLevel = 'Mild depression';
        }
        else if (score <= 30) {
            depressionLevel = 'Moderate depression';
        } else {
            depressionLevel = 'Severe depression';
        }
        setResult(depressionLevel);
        setModalIsOpen(true);
        setAnswers({});
    };

    const closeModal = () => {
        setModalIsOpen(false);
        // Navigate to next page
        // history.push('/next-page'); // Replace '/next-page' with the actual URL of the next page

    };


    return (
        <div className=" container py-2 md:py-10">
            <section>
            <motion.div variants={navVariants} initial='hidden' whileInView='show'>
                <div className='bg-green-700 p-[30px] rounded-lg'>
                <h1 className="h2-medium text-center text-white">Depression Test</h1>
                </div>
                
                <p className='text-center p-regular-18 py-2 mt-2'>Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. <br/> It affects how a person thinks, feels, and behaves, often leading to a variety of emotional and physical problems.</p>  
                
            </motion.div>
            </section>

            
            

            <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} initial='hidden' whileInView='show' className='mt-2'>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">
                
                <div className="mb-4" >
                    <label className="text-lg font-semibold mb-2">Question 1: Do you often feel sad or empty?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q1'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q1', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Question 2: Little interest or pleasure in doing things?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q2'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q2', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Question 3: Trouble falling or staying asleep, or sleeping too much?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q3'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q3', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Question 4: Feeling tired or having little energy?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q4'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q4', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Question 5: Poor appetite or overeating?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q5'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q5', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Question 6: Feeling bad about yourself or that you are a failure or have let yourself or your family down?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q6'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q6', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Question 7: Trouble concentrating on things, such as reading the newspaper or watching television?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q7'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q7', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Question 8: Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q8'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q8', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Question 9: Thoughts that you would be better off dead or of hurting yourself in some way?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q9'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q9', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '4')}>
                            Most of Time
                        </button>
                    </div>
                </div>
                {/* Add more questions like this */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10">Submit</button>
            </form>
            </motion.div>

            <section>
                <motion.div variants={fadeIn('right','tween',0.2,1)} initial='hidden' whileInView='show'>

                <p className='p-bold-24'>Source:</p>

                <p className='p-regular-14 mt-5'>PHQ9 Copyright © Pfizer Inc. All rights reserved. Reproduced with permission. PRIME-MD ® is a trademark of Pfizer Inc.</p>

                 <p className='p-regular-14 mt-5'>
                 Kroenke, Spitzer, & Williams. (2001). The PHQ‐9. Journal of General Internal Medicine 16(9), 606-613. Retrieved from 
                <a href='http://onlinelibrary.wiley.com/doi/10.1046/j.1525-1497.2001.016009606.x/pdf' className='text-blue-500'> http://onlinelibrary.wiley.com/doi/10.1046/j.1525-1497.2001.016009606.x/pdf </a>
                 </p>
               
               <p className='p-regular-14 mt-5'>
              <span className='font-bold'>Please note:</span> Online screening tools are not diagnostic instruments. You are encouraged to share your results with a physician or healthcare provider.
               </p>

               <Separator className='border border-gray-500 mt-2'/>

               </motion.div>
               
            </section>


            {/* {result && <div>Result: {result}</div>} */}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false} // This line is added to avoid warning, but in real case please consider configuring it properly
            //     contentLabel="Depression Test Result"
            //     className="modal"
            // overlayClassName="overlay"
            >
                <h2 className="text-2xl font-bold mb-4">Result</h2>
                <p className="mb-4">{result}</p>
                <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-10" onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Depress3;

