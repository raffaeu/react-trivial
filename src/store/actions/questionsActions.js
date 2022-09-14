export const loadQuestions = (amount) => (dispatch) => {

    dispatch({
        type: 'questions/questionsLoading',
        payload: true
    });

    fetch(`https://opentdb.com/api.php?amount=${amount}`)
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: 'questions/questionsLoaded',
                payload: response.results
            });
        })
        .finally(() => {
            dispatch({
                type: 'questions/questionsLoading',
                payload: false
            });
        });

};