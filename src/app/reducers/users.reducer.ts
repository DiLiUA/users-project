import {ActionsEnums} from "../enums/ActionsEnums.enum";


export let findOne = (arr, id) => {
  return arr.findIndex((item) => item.id === id);
};

const initialState = {list: [], pending: false, error: null};

export function users(state = initialState, {type, payload}) {
  switch (type) {
    case ActionsEnums.GET_USERS:
      return Object.assign({}, state, {pending: true});
    case ActionsEnums.GET_USERS_SUCCESS:
      return Object.assign({}, state, {list: payload, pending: false, error: null});
    case ActionsEnums.GET_USERS_ERROR:
      return Object.assign({}, state, {pending: false, error: true});
    case ActionsEnums.ADD_USER:
      return Object.assign({}, state, {pending: true});
    case ActionsEnums.ADD_USER_SUCCESS:
      return Object.assign({}, state, {list: [...state.list, payload], pending: false, error: null});
    case ActionsEnums.ADD_USER_ERROR:
      return Object.assign({}, state, {pending: false, error: true});
    case ActionsEnums.EDIT_USER:
      return Object.assign({}, state, {pending: true});
    case ActionsEnums.EDIT_USER_SUCCESS:
      const editIndex = findOne(state.list, payload.id);
      return Object.assign({}, state, {pending: false, error: null,
        list: Object.assign([], state.list,
          state.list[editIndex] = Object.assign({}, state.list[editIndex], payload))
      });
    case ActionsEnums.EDIT_USER_ERROR:
      return Object.assign({}, state, {pending: false, error: true});
    case ActionsEnums.DELETE_USER:
      return Object.assign({}, state, {pending: true});
    case ActionsEnums.DELETE_USER_SUCCESS:
      let index = findOne(state.list, payload);
      let newList = Object.assign([], state.list);
      newList.splice(index, 1);
      return Object.assign({}, state, {pending: false, error: null, list: newList});
    case ActionsEnums.DELETE_USER_ERROR:
      return Object.assign({}, state, {pending: false, error: true});
    default:
      return state;
  }
}
