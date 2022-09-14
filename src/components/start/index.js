import React, { useState } from 'react';

// navigation
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadQuestions } from '../../store/actions/questionsActions';
import { clearAnswers } from '../../store/reducers/answersReducer';

import './start.css';

export const Start = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.questions.isLoading);
    const [previousIsLoading, setPreviousIsLoading] = useState(null);

    // start loading
    const onStartClick = () => {
        setPreviousIsLoading(true);
        // load new questions
        dispatch(loadQuestions(10));
        // clear previous answers
        dispatch(clearAnswers());
    }

    // component redirect only after the loading is completed
    useEffect(() => {
        // load data
        if (isLoading !== true && previousIsLoading !== null) {
            navigate('/question/1');
        }
    }, [isLoading])

    return (
        <div className='panel start'>
            <header>Start the Trivial</header>
            {isLoading && <span>Loading...</span>}
            <div className='body'>
                <button onClick={onStartClick}>START TRIVIAL</button>
            </div>
        </div>
    )
}

export default Start;