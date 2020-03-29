import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'
import { fetchPosts } from '../redux/posts/actions'

import Post from './Post'
import Footer from './Footer'

function App({ posts, page, isPostsAreOver, fetchPosts }) {
	console.log('render App')
	console.log('PAGE: ',page)

	useEffect(() => {
		fetchPosts()
	}, [fetchPosts])

	function scrollHandler(e) {
		console.log('scroll')

		const { scrollTop, scrollHeight, clientHeight } = e.target

		if (Math.round(scrollTop + clientHeight) === scrollHeight) {
			console.log('scroll end')

			fetchPosts()
		}
	}

	const debouncedHandler = debounce(scrollHandler, 150)
	const handlerWithEvent = e => {
		debouncedHandler(e.nativeEvent)
	}

	return (
		<div className="app" onScroll={isPostsAreOver? undefined : handlerWithEvent}>
			<div className="app__content">
				{posts.map(post =>
					<Post
						key={post.id}
						id={post.id}
						userId={post.userId}
						title={post.title}
						body={post.body}
					/>)
				}
				<Footer/>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	posts: state.posts.posts,
	page: state.posts.page,
	isPostsAreOver: state.posts.isPostsAreOver
})
const mapDispatchToProps = {fetchPosts}

export default connect(mapStateToProps, mapDispatchToProps)(App)