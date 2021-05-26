import axios from "axios"

export const loadBooks = () => {
    return (dispatch, getState) => {
        fetch("https://redux-book-shelf.herokuapp.com/books")
            .then(res => res.json())
            .then(data => {
                // console.log(data.data)
                dispatch({
                    type: 'LOAD_BOOKS',
                    payload: data.data
                })
            })
    }
}

export const addToReadingList = (payload) => {
    return async (dispatch) => {
        await axios.post("https://redux-book-shelf.herokuapp.com/add-to-reading-list", payload)

        dispatch({
            type: 'ADD_TO_READING_LIST',
            payload: payload
        })

    }
}

export const removeFromReadingList = (payload) => {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload: payload
    }
}

export const addToFinishedList = (payload) => {
    return {
        type: 'ADD_TO_FINISHED_LIST',
        payload: payload
    }
}