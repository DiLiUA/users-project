import {ActionsEnums} from "../enums/ActionsEnums.enum";

export function getUsers() {
  return {
    type: ActionsEnums.GET_USERS
  }
}

export function addUser(user) {
  return {
    type: ActionsEnums.ADD_USER,
    payload: user
  }
}

export function deleteUser(id) {
  return {
    type: ActionsEnums.DELETE_USER,
    payload: id
  }
}

export function editUser(user) {
  return {
    type: ActionsEnums.EDIT_USER,
    payload: user
  }
}
