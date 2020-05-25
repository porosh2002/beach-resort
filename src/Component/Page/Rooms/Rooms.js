import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import data from "../../../newData";
import Room from "../../Room/Room";
import React, { Component } from "react";

export default class Rooms extends Component {
  constructor() {
    super();
    this.state = {
      type: "all",
      capacity: "any",
      price:600,
      breakfast :'',
      pets : false
    };
  }
  render() {
    const filter_type = data.filter((x) => {
      if (this.state.type === "all") {
        return x;
      }
      if (x.type === this.state.type) {
        return x;
      }
    });
    const filter_capacity = filter_type.filter((x) => {
      if (this.state.capacity === "any") {
        return x;
      }
      if (this.state.capacity === "7") {
        if (Number(x.capacity) > Number(7)) {
          return x;
        }
      }
      if (Number(x.capacity) === Number(this.state.capacity)) {
        return x;
      }
    });
    const filter_price = filter_capacity.filter((x) => {
      if (x.price <= this.state.price) {
        return x;
      }
    });
    const filter_breakfast = filter_price.filter((x) => {
return x;
    });
    const room = filter_breakfast.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    const select_rooms = (event) => {
      this.setState({
        type: event.target.value,
      });
    };
    const select_capacity = (event) => {
      this.setState({
        capacity: event.target.value,
      });
    };
    const select_price = (event) => {
      this.setState({
        price: event.target.value,
      });
    };
    return (
      <div>
        <Hero
          main_class={"Rooms_bg"}
          title={"Our Rooms"}
          Route={"/"}
          Button_txt={"Return Home"}
          Rooms_bg={"Rooms_bg"}
          className={"Our_Rooms_btn"}
        />{" "}
        <div className="search_field">
          <p className="title_src"> Search Rooms </p>{" "}
          <div className="search_iteams">
            <p className="s_i_title"> Select Rooms </p>{" "}
            <select id="select_rooms" onChange={select_rooms}>
              <option value="all"> All </option>{" "}
              <option value="single"> Single </option>{" "}
              <option value="double"> Double </option>{" "}
              <option value="family"> Family </option>{" "}
              <option value="presidential"> Presidential </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="search_iteams">
            <p className="s_i_title"> Capacity </p>{" "}
            <select id="select_capacity" onChange={select_capacity}>
              <option value="any"> Any </option> <option value="1"> 1 </option>{" "}
              <option value="2"> 2 </option> <option value="3"> 3 </option>{" "}
              <option value="4"> 4 </option> <option value="5"> 5 </option>{" "}
              <option value="6"> 6 </option> <option value="7"> 6 + </option>{" "}
            </select>
          </div>
          <div className="search_iteams">
            <p className="s_i_title">Max Price ${this.state.price} </p>
            <input className='range_inpt' defaultValue='600' type="range" min="100" max="600" onChange={select_price}></input>
          </div>
        </div>
        {room.length === 0 ? <p className='nrf'>No Rooms Found !</p> : room} <Footer />
      </div>
    );
  }
}
