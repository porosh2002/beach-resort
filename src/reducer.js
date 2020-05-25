import { Success, Pending, Error } from "./constant";
const initialStateRobots = {
    rooms:[]
  }
export const rooms_fields=(state=initialStateRobots, action={})=>{
    switch (action.type) {
        case Pending:
          return Object.assign({}, state)
        case Success:
          return Object.assign({}, state, {rooms: action.Payload})
        case Error:
          return Object.assign({}, state)
        default:
          return state
      }
}
