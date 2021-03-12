import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={s.profile}>
            <div className={s.images}>
                <img
                    src='https://secureservercdn.net/104.238.71.250/0bc.19f.myftpupload.com/wp-content/uploads/2019/02/Golden-Leaves-2018-Acrylic-on-canvas-48-x-36-inches-SGD-6100-1200x300.jpg'/>
            </div>
            <div className={s.avatar}>
                <img src='https://pbs.twimg.com/profile_images/624266818891423744/opyF6mM5.png'/>
                <div className={s.discription}>discription</div>
            </div>

        </div>
    );
}

export default ProfileInfo;
