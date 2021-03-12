import React from 'react';

import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPost posts={props.posts}/>
        </div>
    );
}

export default Profile;
