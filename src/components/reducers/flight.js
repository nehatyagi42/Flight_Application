import * as ActionType from '../../actions/ActionType';

const initial = {
    flights: {},
    label: "",
    loggedIn: false,
    error: false,
    registered: false,
}

export const flight = (state = initial, action) => {
    switch (action.type) {
        case ActionType.ON_RESULT:
            return {
                flights: action.payload
            }
        case ActionType.ON_INIT:
            return initial;
            case ActionType.LOGGIN_SUCCESSFULL:
                return {
                  ...state,
                  loggedIn: true,
                  error: false,
                };
              case ActionType.LOGGIN_FAILURE:
                return {
                  ...state,
                  error: true,
                };
                case ActionType.REGISTER_SUCESSFULL:
                    return {
                      ...state,
                      registered: true,
                      loggedIn:true,
                      error: false,
                    };
                  case ActionType.REGISTER_FAILURE:
                    return {
                      ...state,
                      error: true,
                    };
        default:
            return state;
    }
} 
