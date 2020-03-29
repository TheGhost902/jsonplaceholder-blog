import React from 'react'
import { connect } from 'react-redux'

function Footer({ isFetching, isPostsAreOver }) {
    return (
        <div className="footer">
            {isFetching?
                <div className="loading-animation">
                    <div className="loading-animation__square1"></div>
                    <div className="loading-animation__square2"></div>
                </div>
                :
                isPostsAreOver?
                    <p>That's all for today</p>
                    :
                    <div className="further">
                        <div className="further__dot"></div>
                        <div className="further__dot"></div>
                        <div className="further__dot"></div>
                    </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    isFetching: state.posts.isFetching,
    isPostsAreOver: state.posts.isPostsAreOver
})

export default connect(mapStateToProps, null)(Footer)