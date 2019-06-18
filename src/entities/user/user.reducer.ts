const AUTH_USER = "AUTH_USER";
const UNAUTH_USER = "UNAUTH_USER";
const FETCHING_USER = "FETCHING_USER";
const FETCHING_USER_FAILURE = "FETCHING_USER_FAILURE";
const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";

import { User, UserAuth } from "entities/user/user.models";

const initialUserState: User = null;

// export const user = (state = initialUserState, action: any) => {
//   switch (action.type) {
//     case FETCHING_USER_SUCCESS:
//       return {
//         ...state,
//         uid: action.uid,
//         name: action.user.name,
//         lastUpdated: action.timestamp
//       };
//     default:
//       return state;
//   }
// };

const initialState = {
  isFetching: false,
  error: "",
  isAuthed: false,
  authedId: ""
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      };
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: ""
      };
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    //   case FETCHING_USER_SUCCESS:
    //     return action.user === null
    //       ? {
    //           ...state,
    //           isFetching: false,
    //           error: ""
    //         }
    //       : {
    //           ...state,
    //           isFetching: false,
    //           error: "",
    //           [action.uid]: user(state[action.uid], action)
    //         };
    default:
      return state;
  }
};
