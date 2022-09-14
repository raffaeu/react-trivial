import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Start from '../../components/start';
import Question from '../../components/question';
import Results from '../../components/results';

import './main.css';

export const Main = () => {
    return (
        <div className='main'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Start />} />
                    <Route exact path='/question/:questionId' element={<Question />} />
                    <Route path='/results' element={<Results />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;