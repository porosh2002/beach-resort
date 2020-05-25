import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import Title from "../Title/title";
import Room from '../Room/Room';
const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
  };
};
class FeaturedRooms extends Component {
  render() {
    const { rooms} = this.props;
    console.log(rooms);
const Froom = rooms.filter(data=>{
  if(data.featured=== true){
    return data
  }
})
const room = Froom.map(room => {
  return <Room key={room.id} room={room} />;
});
    return (
      <div className='featured_section'>
        <Title title={"Featured Rooms"} />
        {room.length===0?<Loading />:room}
      </div>
    );
  }
}
export default connect(mapStateToProps)(FeaturedRooms);
