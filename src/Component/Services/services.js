import React from "react";
import Tilt from "react-tilt";
import "./services.css";
import Title from "../Title/title";
export default function services() {
  return (
    <div className='services_section'>
      <Title title={"Services"} />
      <div className="service">
        <Tilt className="iteams">
          <div className="content">
            <i className="fas fa-wifi"></i>
            <p className="title_ser">{"Free Wifi"}</p>
            <p className="des_ser">{"Unlimited"}</p>
          </div>
        </Tilt>
        <Tilt className="iteams">
          <div className="content">
            <i className="fas fa-coffee"></i>
            <p className="title_ser">{"Free Coffee"}</p>
            <p className="des_ser">{"Unlimited"}</p>
          </div>
        </Tilt>
        <Tilt className="iteams iteams_lst">
          <div className="content">
            <i className="fas fa-biking"></i>
            <p className="title_ser">{"Free Biking"}</p>
            <p className="des_ser">{"Unlimited"}</p>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
