import React from 'react';
import './Footer.css';
var date = new Date();
var year = date.getFullYear();
const Footer=()=>{
    return(
        <div className='footer'>
            <p>© 2018-{year} MD Jamil Kashem Porosh</p>
        </div>
    )
}
export default Footer;

