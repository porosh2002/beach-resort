import React from "react";
import data from "../../../newData";
import { Link } from "react-router-dom";
function SingleRoom(props) {
  const product = data.find((x) => x.slug === props.match.params.slug);
  return (
    <div className="single_room">
      <p className="sr_title">{product.name}</p>
      <p className="sr_des">{product.description}</p>
      <p className="sr_price">
        <span className="title_sr">Price</span> : {product.price}$ (Per Night)
      </p>
      <p className="sr_size">
        <span className="title_sr">Size</span> : {product.size} Square foot
      </p>
      <p className="sr_capacity">
        <span className="title_sr">Capacity</span> : {product.capacity} People
      </p>
      {product.pets ? (
        <p className="sr_pets">
          <span className="title_sr">Pets</span> : Pets Allowed
        </p>
      ) : (
        <p className="sr_pets">
          <span className="title_sr">Price</span> : Pets Allowed
        </p>
      )}
      {product.breakfast ? (
        <p className="sr_breakfast">
          <span className="title_sr">Breakfast</span> : Free Breakfast
        </p>
      ) : (
        <p className="sr_breakfast">
          <span className="title_sr">Breakfast </span> : No Free Breakfast
        </p>
      )}
      <p className="sr_ext">
        <span className="title_sr">Extras</span> : {product.extras}
      </p>
      <img className="rooms_img" src={product.images[0]} alt="Rooms" />
      <img className="rooms_img" src={product.images[1]} alt="Rooms" />
      <img className="rooms_img" src={product.images[2]} alt="Rooms" />
      <img className="rooms_img" src={product.images[3]} alt="Rooms" />
<div className='btn_div'>
<Link to={`/rooms`} className="rtrn_bck">
        {"Back To Rooms"}
      </Link>
      <Link to={`/`} className="rtrn_bck">
        {"Back To Home"}
      </Link>
</div>
    </div>
  );
}
export default SingleRoom;
