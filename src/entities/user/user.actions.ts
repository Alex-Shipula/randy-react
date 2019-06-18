import { url } from "inspector";

const AUTH_USER = "AUTH_USER";
const UNAUTH_USER = "UNAUTH_USER";
const FETCHING_USER = "FETCHING_USER";
const FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE";
const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";


export const userActions = {
  errorAfterFiveSeconds: () => {
    return dispatch => {
      fetch("http://drupal7.general.clubdev.ru/api/user/login.json", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: "su",
          password: "general"
        }),
        mode: "no-cors"
      }).then(data => {
        console.log(data);
      });
      dispatch({
        type: "ITEMS_HAS_ERRORED",
        hasErrored: true
      });
    };
  }
}
