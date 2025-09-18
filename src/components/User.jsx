import React from "react";
import cam from './camera.png'
import profile from './profile.png'

const User = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="user">
            <div className="setting">
                Account Settings
            </div>
            <div className="userName">
                <div className="img">
                    <img src={profile} alt="Profile Image" />
                    <img src={cam} className="cam" alt="" />
                </div>
                <div className="detail">
                    <p className="name">{userData?.name || "No Name"}</p>
                    <p className="emailID">{userData?.email || "No Email"}</p>
                </div>
            </div>
            <p className="bio">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laboriosam alias necessitatibus at blanditiis id fuga suscipit facere.</p>
        </div>
    )
}

export default User;