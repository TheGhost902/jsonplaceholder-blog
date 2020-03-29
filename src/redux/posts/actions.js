import { POSTS_FETCHED, INCREASE_PAGE, FETCHING_START, FETCHING_END, POSTS_ARE_OVER } from "./types"

export const postsFetched = posts => ({type: POSTS_FETCHED, payload: posts})

export const increasePage = () => ({type: INCREASE_PAGE})

export const fetchingStart = () => ({type: FETCHING_START})

export const fetchingEnd = () => ({type: FETCHING_END})

export const postsAreOver = () => ({type: POSTS_ARE_OVER})

export const fetchPosts = () => async (dispatch, getState) => {
    const { posts } = getState()

    if (posts.isFetching) return
    if (posts.posts.length / 10 + 1 !== posts.page) return

    dispatch(fetchingStart())

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${posts.page}`)
    const data = await response.json()

    if (!data.length) {
        dispatch(fetchingEnd())
        return dispatch(postsAreOver())
    } 

    dispatch(postsFetched(data))
    dispatch(increasePage())
    return dispatch(fetchingEnd())
}