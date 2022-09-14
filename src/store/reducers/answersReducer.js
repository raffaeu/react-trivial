import { createSlice } from '@reduxjs/toolkit'

// reducer that contains all questions
export const answersSlice = createSlice({
    name: 'answers',
    initialState: {
        answersList: [],
    },
    reducers: {
        // it loads the questions from Web Api
        addAnswer: (state, action) => {
            state.answersList.push(action.payload)
        },
        clearAnswers: (state, action) => {
            state.answersList = []
        }
    },
})

export const { addAnswer, clearAnswers } = answersSlice.actions;

export default answersSlice.reducer