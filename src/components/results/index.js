import React from 'react';

// navigation
import { useNavigate } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from "react-redux";

import './results.css';

const Results = () => {

    const answers = useSelector(state => state.answers).answersList;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className='panel results'>
            <header>Results</header>
            <div className='body'>
                <h3>Correct answers</h3>
                <p>{answers.filter(a => a.correct).length}</p>
                <h3>Wrong answers</h3>
                <p>{answers.filter(a => !a.correct).length}</p>
            </div>
            <div className="footer">
                <button onClick={() => navigate('/')}>START</button>
            </div>
        </div>
    )
}

export default Results;