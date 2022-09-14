import { configureStore } from '@reduxjs/toolkit';

import { questionsSlice } from './reducers/questionsReducer';
import { answersSlice } from './reducers/answersReducer';

// configure Redux
export default configureStore({
    reducer: {
        questions: questionsSlice.reducer,
        answers: answersSlice.reducer
    }
})