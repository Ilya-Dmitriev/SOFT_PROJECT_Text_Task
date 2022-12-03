import { getToken } from "api/auth";
import { IAuthParams } from "../../models/IAuthParams";
import { AppDispatch } from "store/StoredProvider";
import { authSlise } from "../redusers/AuthSlise";

export const fetchAuth =
  (authParams: IAuthParams) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlise.actions.authFetching());
      const response = await getToken(authParams);
      dispatch(authSlise.actions.authFetchingSuccess(response.data));
    } catch (e) {
      dispatch(authSlise.actions.authFetchingError(e.message));
    }
  };
