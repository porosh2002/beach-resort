import React from "react";
import { Link } from "react-router-dom";
import './Button.css';
 const Button=({className,destination,Button_txt})=>{
  return (
    <div>
      <Link className={className} to={destination}>
        {Button_txt}
      </Link>
    </div>
  );
};
export default Button;
