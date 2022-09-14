import { createSlice } from '@reduxjs/toolkit'

// reducer that contains all questions
export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questionsList: [],
        isLoading: false
    },
    reducers: {
        // it loads the questions from Web Api
        questionsLoaded: (state, action) => {
            state.questionsList = action.payload
        },
        questionsLoading: (state, action) => {
            state.isLoading = action.payload
        },


    },
})

export const { questionsLoaded, questionsLoading } = questionsSlice.actions;

export default questionsSlice.reducer