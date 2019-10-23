import {
  CHANGE_COUNT,
  RESET_COUNT,
  SET_ORDER_BY
} from "../constants/actionTypes";

const countReducer = (
  state = {
    count: 0,
    drinks: {},
    orderBy: null
  },
  action
) => {
  switch (action.type) {
    case CHANGE_COUNT:
      if (state.drinks[action.payload.name]) {
        const newCount = {};
        newCount[action.payload.name] =
          state.drinks[action.payload.name] + action.payload.change;
        return {
          ...state,
          drinks: { ...state.drinks, ...newCount },
          count: state.count + +action.payload.change
        };
      } else {
        const newCount = {};
        newCount[action.payload.name] = 1;
        return {
          ...state,
          drinks: { ...state.drinks, ...newCount },
          count: state.count + +action.payload.change
        };
      }
    case RESET_COUNT:
      return {
        count: 0,
        drinks: {}
      };
    case SET_ORDER_BY:
      return { ...state, orderBy: action.payload.orderBy };
    default:
      return state;
  }
};

export default countReducer;
