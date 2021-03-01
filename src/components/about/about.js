import React from 'react';
import './about.css';

let About = (props) => {
    return (
        <div className="About">
            <div className="AboutContent">
            	<h3>Once connected to a Database, User Datas can be displayed here...</h3>
            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            	  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            	  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            	  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            	  
	            <h1 className="Title">Name : {props.Data.username}</h1>
	            {props.Data.email ? <p>Email : {props.Data.email}</p> : null}
	            <p>Password : {props.Data.password}</p>
            </div>
        </div>
    )
}
export default About;