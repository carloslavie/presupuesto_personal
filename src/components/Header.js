import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav className="navBar">
            <a href="#!" >{titulo}</a>
        </nav>
     );
}
 
export default Header;