import React from 'react';

import s from './MyPost.module.css';
import Post from "./Post/Post";

function MyPost(props) {
   let postsElements = props.posts.map(p => <Post posts={p.message} likeCount={p.likeCount} />)
    return (
        <div className={s.mypost}>
            <textarea maxLength={200} placeholder='AddPost'></textarea>
            <button>Add</button>
            {postsElements}
        </div>
    );
}

export default MyPost;
