import React from 'react';
import '../css/profile-userinfo.css';

const UserInfo = (props) => {
  if (props.userInfo) {
    
    const { id, suspended, firstName, lastName, bio, block_connection_requests, admin } = props.userInfo
    console.log(props.userInfo.admin);
    return (
      
      <div>
        <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <p id="profile-name">{firstName} {lastName} </p>
        <p id="profile-bio-title">Bio  </p>
        <p id="profile-bio-content">{bio}</p>
      </div>
    );
  }
  return <div></div>
};

const AdminInfo = (props) => {}


export default UserInfo;
