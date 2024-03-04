"use client"

import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { fadeIn, navVariants } from '@/utils/motion';
import { Separator } from '@/components/ui/separator';
// import { useNavigate } from 'react-router-dom';
// import { db } from '../firebase';

const YouthTest = () => {
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
            depressionLevel = 'Based on your Responses, it indicates you are at a lower risk. In this case, you must continue practicing healthy coping mechanisms and seek professional support if needed.';
        }
        else if (score <= 20) {
            depressionLevel = 'Based on your Responses, it indicates you are at moderate risk. In this case, you must seek additional support or counseling to address any emerging concerns and learn additional coping strategies.';
        }
        else if (score <= 30) {
            depressionLevel = 'High Risk';
        } else {
            depressionLevel = 'Extremely High Risk';
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
                    <h1 className="text-white h2-medium text-center">Youth Psychological well-being Test</h1>
                    </div>
                        <p className='text-center p-regular-18 py-2 mt-2'>The questionnaire that follows can be used to see if you are having emotional, attentional, or behavioral difficulties. <br /> For each item please mark how often you:</p>
                 </motion.div>
            </section>

            <motion.div variants={fadeIn('right','tween',0.2,1)} initial='hidden' whileInView='show'>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">How often do you feel sad or hopeless?</label>
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
                    <label className="text-lg font-semibold mb-2">Do you have trouble concentrating or paying attention?</label>
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
                            Often
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '4')}>
                            Always
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Have you unsuccessfully attempted to cut down or control your substance use in the past year?</label>
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
                    <label className="text-lg font-semibold mb-2">How would you rate your stress level?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q4'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q4', '1')}
                        >
                            Low
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '2')}>
                            Moderate
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '3')}>
                            High
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '4')}>
                            Very High
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Have you experienced changes in your sleeping patterns (e.g., trouble falling asleep, waking up frequently)?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q5'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q5', '1')}
                        >
                            No Changes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '2')}>
                            Occasionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '4')}>
                            Constantly
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Do you often feel overwhelmed by your emotions?</label>
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
                    <label className="text-lg font-semibold mb-2">Have you experienced a significant decrease in appetite or weight loss recently?</label>
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
                    <label className="text-lg font-semibold mb-2">How would you rate your self-esteem?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q8'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q8', '1')}
                        >
                            Very Low
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '2')}>
                            Low
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '3')}>
                            Moderate
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '4')}>
                            High
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">Have you had thoughts of self-harm or suicide?</label>
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

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">How satisfied are you with your social life?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q10'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q10', '1')}
                        >
                            Very Satisfied
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '2')}>
                            Moderately Satisfied
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '3')}>
                            Dissatisfied
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '4')}>
                            Very Dissatisfied
                        </button>
                    </div>
                </div>
                {/* Add more questions like this */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10">Submit</button>
            </form>
            </motion.div>

            <section className='wrapper'>
                <motion.div variants={fadeIn('right','tween',0.2,1)} initial='hidden' whileInView='show' className='mt-5'>
                
                <p className='p-bold-24'>Source:</p>
                <p className='p-regular-14 mt-5'>Pediatric Symptom Checklist – Youth Self-Report (PSC-Y) </p>

                <p className='p-regular-14 mt-5'>Jellinek, Murphy, et al. (1988). Pediatric Symptom Checklist: Screening school-age children for psychosocial dysfunction. The Journal of Pediatrics, 112(2), pp. 201-209. Retrieved from 
                    <a href='https://doi.org/10.1016/S0022-3476(88)80056-8' className='text-blue-500'> https://doi.org/10.1016/S0022-3476(88)80056-8</a>
                </p>

                 <p className='p-regular-14 mt-5'>
                 For more information, visit the Pediatric Symptom Checklist page at Massachusetts General Hospital Psychiatry:<br/> <a href='https://www.massgeneral.org/psychiatry/treatments-and-services/pediatric-symptom-checklist' className='text-blue-500'> https://www.massgeneral.org/psychiatry/treatments-and-services/pediatric-symptom-checklist</a> 
                 </p>
               
               <p className='p-regular-14 mt-5'>
              <span className='font-bold'>Please note:</span> Online screening tools are not diagnostic instruments. You are encouraged to share your results with a physician or healthcare provider.
               </p>
               <Separator className='border border-gray-500'/>
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

export default YouthTest;