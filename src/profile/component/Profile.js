import React from 'react';
import PropTypes from 'prop-types';


const Profile = (props) => {
    return (
        <div>  
            <p><span>Full name:</span> {props.fullName}</p>
            <p><span>Profession:</span> {props.profession}</p>
            <p><span>Bio:</span> {props.bio}</p>
            <div>
            {props.children}
            </div>
            <button type="button" onClick={()=>props.handleName(props.fullName)} >Alert Name</button>
        </div>
    )
}
Profile.defaultProps = {
    fullName: 'provided when requested',
    bio:'I am a web-developpment student',
    profession:'web developer full-stack'
    };

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func.isRequired
} 

export default Profile;
