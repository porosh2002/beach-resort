import React from "react";
import defaultImg from "../../images/room-1.jpeg";
import "./Room.css";
import { Link } from "react-router-dom";
export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <p>${price}</p>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="room-link">
          {'More info'}
        </Link>
      </div>

      <p className="room-info">{name}</p>
    </article>
  );
}
