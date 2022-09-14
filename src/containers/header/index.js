import React from 'react';

// redux
import { useSelector } from "react-redux";

import './header.css';

export const Header = () => {

    const questions = useSelector(state => state.questions);

    return (
        <div className='header'>
            <h1>Trivial</h1>
            <h4>Total Questions: {questions.questionsList.length}</h4>
        </div>
    )
}

export default Header;