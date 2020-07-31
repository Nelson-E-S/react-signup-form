import React from 'react';
const UserData = (props) => {
    return(
        <div style={{display:'flex',flexFlow:'column nowrap',alignItems:'flex-start'}}>
            <p>Here's the entered data:</p>
            <span>Username  : {props.userName}</span>
            <span>Password  : {props.userPassword}</span>
            <span>Age       : {props.userAge}</span>
            <span>Gender    : {props.userGender}</span>
            <span>Occupation: {props.userOccupation}</span>
        </div>
    );
}
export default UserData;