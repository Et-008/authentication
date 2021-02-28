import React from 'react';
import Navbar from './navigation/navbar';

let Header = (props) => {
    return (
    <header className="Header">
        <Navbar {...props} />
    </header>
    )
}
export default Header;