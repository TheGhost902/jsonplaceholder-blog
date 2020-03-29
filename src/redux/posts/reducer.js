import { POSTS_FETCHED, INCREASE_PAGE, FETCHING_START, FETCHING_END, POSTS_ARE_OVER } from "./types"

const initialState = {
    posts: [],
    page: 1,
    isFetching: false,
    isPostsAreOver: false
}

function postsReducer(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case POSTS_FETCHED:
            return {...state, posts: [...state.posts, ...action.payload]}
        case INCREASE_PAGE:
            return {...state, page: state.page + 1}
        case FETCHING_START:
            return {...state, isFetching: true}
        case FETCHING_END:
            return {...state, isFetching: false}
        case POSTS_ARE_OVER:
            return {...state, isPostsAreOver: true}
        default:
            return state
    }
}

export default postsReducer