import React from 'react';

let About = (props) => {
    return (
        <div className="About">
            <h1 className="Title">Name : {props.Data.username}</h1>
            {props.Data.email ? <p>Email : {props.Data.email}</p> : null}
            <p>Password : {props.Data.password}</p>
        </div>
    )
}
export default About;