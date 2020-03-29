import React from 'react'

function Post({ id, userId, title, body }) {
    console.log('render Post: ', id)
    return (
        <div className="post">
            <p>Post id: {id}</p>
            <h3 className="post__title">{title}</h3>
            <p>{body}</p>
            <hr/>
            <p>User id: {userId}</p>
        </div>
    )
}

export default React.memo(Post)