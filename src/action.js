import { Success, Pending, Error } from "./constant";
import rooms from './newData';
export const requestRooms = () => (dispatch) => {
  try {
    dispatch({ type: Pending });
    dispatch({ type: Success, Payload:rooms});
  } catch {
    dispatch({ type: Error });
  }
}
