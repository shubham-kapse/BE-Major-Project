"use client"

import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { fadeIn, navVariants } from '@/utils/motion';
import { Separator } from '@/components/ui/separator';
// import { useNavigate } from 'react-router-dom';
// import { db } from '../firebase';

const Bipolar = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // const history = useNavigate();

    const handleChange = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });

        // db.collection('answers').doc(questionId).set({ value })
        //     .then(() => console.log('Answer saved to Firestore'))
        //     .catch((error) => console.error('Error saving answer:', error));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculate depression level based on answers
        let score = Object.values(answers).reduce((acc, val) => acc + parseInt(val), 0);
        let depressionLevel = '';
        if (score <= 10) {
            depressionLevel = 'No Indication of Bipolar Disorder';
        }
        else if (score <= 20) {
            depressionLevel = 'Mild Symptoms or Bipolar Traits';
        }
        else if (score <= 30) {
            depressionLevel = 'Possible Bipolar Disorder';
        } else {
            depressionLevel = 'High Risk of Bipolar Disorder';
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
        <div className="container mx-auto mt-8">
        <section>
            <motion.div variants={navVariants} initial='hidden' whileInView='show'>
                <div className='bg-green-700 p-[30px] rounded-lg'>
                    <h1 className="h2-medium text-center text-white">Bipolar Test</h1>
                </div>
                     <p className='text-center p-regular-18 py-2 mt-2'>Bipolar disorder is a serious mental illness that causes unusual shifts in mood, ranging from extreme highs (mania) to extreme lows (depression). It is characterized by periods of depression and periods of abnormally elevated mood that each last from days to weeks. Symptoms of bipolar disorder depend on which mood you're experiencing.</p>
                 
            </motion.div>
            
        </section>
            <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} initial='hidden' whileInView='show' className='mt-2'>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Over the past week, have you experienced periods where you felt excessively high or euphoric, followed by periods of extreme low mood or depression?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q1'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q1', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">During periods of elevated mood, have you engaged in reckless or impulsive behaviors, such as excessive spending, risky sexual behavior, or substance abuse?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q2'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q2', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Have you experienced changes in your sleep patterns during these mood swings, such as needing less sleep during manic phases or sleeping excessively during depressive episodes?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q3'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q3', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Do you often find it difficult to concentrate or stay focused during manic or depressive episodes?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q4'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q4', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Have you ever had thoughts of harming yourself or suicidal ideation during depressive episodes?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q5'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q5', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Do you experience changes in appetite or weight during mood swings, such as significant weight gain or loss?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q6'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q6', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Do you often feel excessively energetic or agitated during manic phases, to the point where others notice and comment on your behavior?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q7'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q7', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Have you experienced a decrease in interest or pleasure in activities you once enjoyed during depressive episodes?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q8'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q8', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Have your mood swings significantly impacted your ability to function at work, school, or in your relationships?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q9'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q9', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '4')}>
                            Frequently
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

                    <p className='p-regular-14 mt-5'>Hirschfeld, et al. (2000) Development and Validation of a Screening Instrument for Bipolar Spectrum Disorder: The Mood Disorder Questionnaire. American Journal of Psychiatry 157(11), pp. 1873-1875. Retrieved from <br/>
                    <a href='http://ajp.psychiatryonline.org/doi/abs/10.1176/appi.ajp.157.11.1873' className='text-blue-500'> http://ajp.psychiatryonline.org/doi/abs/10.1176/appi.ajp.157.11.1873</a>
                    </p>

                    <p className='p-regular-14 mt-5'><span className='font-bold'>Please note: </span>Online screening tools are not diagnostic instruments. You are encouraged to share your results with a physician or healthcare provider.</p>

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

export default Bipolar;