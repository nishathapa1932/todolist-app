import { NEW_TODO } from "./ActionTypes";

const initialState = [
    { id: 1, title: 'Wash Clothes', done: false },
    { id: 2, title: 'pay bills', done: true }
]

const todos = (state = initialState, action) => {
    switch(action.type) {
        case NEW_TODO:
            return [
                ...state,
                {
                  id: initialState.length + 1, // TODO id needs to worked on
                  title: action.title,
                  done: false
                }
            ]
        default:
            return state
    }
}

export default todos