import { AppDispatch } from "store/StoredProvider";
import { authSlise } from "../redusers/AuthSlise";

export const clearAuthTocken = () => (dispatch: AppDispatch) => {
  dispatch(authSlise.actions.clearAuthTocken());
};
