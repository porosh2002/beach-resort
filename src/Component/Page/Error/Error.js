import React from "react";
import "./Error.css";
import Button from '../../Button/Button';
import ErrorIllustrator from "../../Image/404.png";
export default function Error() {
  return (
    <div>
      <div>
        <img className="notFound_illustrator" alt='404' src={ErrorIllustrator}></img>
        <br></br>
        <p className='error_txt'>{'Your Requested Page is Not Found.'}</p>
        <Button  className={'Our_Rooms_btn'} destination={'/'} Button_txt={'BACK  TO HOME'}/>
      </div>
    </div>
  );
}