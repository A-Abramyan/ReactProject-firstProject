import React from 'react';

import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.post}>
            <div>
                <div>
                    <img className={s.photo} src='https://юристы19.рф/wp-content/uploads/2016/04/nophoto-men.png'/>
                    <span> {props.posts} </span>
                    <img className={s.like} src='https://i1.wp.com/mavenmc.com/wp-content/uploads/2016/10/logo-like.png?fit=300%2C254'/>
                    <span> {props.likeCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
