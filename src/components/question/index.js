import React from 'react';

// navigation
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from "react-redux";

import './question.css';

const Question = () => {

    const questions = useSelector(state => state.questions).questionsList;
    let { questionId } = useParams();
    questionId = parseInt(questionId);
    const question = questions[questionId - 1];
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onPrevClick = () => {
        navigate('/question/' + (questionId - 1));
    }

    const onNextClick = () => {
        if (questionId >= questions.length) {
            navigate('/results');
            return;
        }
        navigate('/question/' + (questionId + 1));
    }

    const onAnswer = (answer, correct) => {
        dispatch({
            type: 'answers/addAnswer',
            payload: {
                answer: answer, correct: correct
            }
        })
    }

    useEffect(() => {
        if (!questions || questions.length < 1) {
            navigate('/');
        }
    }, [])

    return (
        <div className='panel question'>
            <header>Question nr. {questionId}</header>
            <div className='body'>
                <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
                <legend>Select one answer:</legend>
                <div className="answer">
                    <input type="radio" name="options" key={question.correct_answer} id={question.correct_answer} value={question.correct_answer} onClick={() => onAnswer(question.correct_answer, true)} />
                    <label htmlFor={question.correct_answer}>{question.correct_answer}</label>
                </div>

                {
                    question.incorrect_answers.map((a, i) => {
                        return (
                            <div className="answer" key={a}>
                                <input type="radio" name="options" key={a} id={a} value={a} onClick={() => onAnswer(a, false)} />
                                <label htmlFor={a}>{a}</label>
                            </div>)
                    })
                }
            </div>
            <div className="footer">
                <button onClick={() => navigate('/')}>START</button>
                <button onClick={onPrevClick} disabled={questionId <= 1}>PREV</button>
                <button onClick={onNextClick}>NEXT</button>
            </div>
        </div >
    )
}

export default Question;