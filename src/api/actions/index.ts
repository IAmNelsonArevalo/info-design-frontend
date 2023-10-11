import {useDispatch} from "react-redux";
/** Interfaces & Types */
import type { Dispatch } from 'redux';
/** Actions */
import useClientActions from "./clients";

const useActions = () => {
  /** Dispatch */
  const dispatch: Dispatch<any> = useDispatch();

  return {
    dispatch,
    useClientActions
  };
}

export default useActions;