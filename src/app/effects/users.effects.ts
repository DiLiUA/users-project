import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import {UsersServise} from "../users.service";
import {ActionsEnums} from "../enums/ActionsEnums.enum";

@Injectable()
export class UsersEffects {
  constructor(private actions$ : Actions, private usersService: UsersServise) { }

  @Effect() getUsers$ = this.actions$
    .ofType(ActionsEnums.GET_USERS)
    .switchMap(action =>
      this.usersService.getUsers()
        .map(users => ({type: ActionsEnums.GET_USERS_SUCCESS, payload: users}))
        .catch(() => Observable.of({type: ActionsEnums.GET_USERS_ERROR})));

  @Effect() addUser$ = this.actions$
    .ofType(ActionsEnums.ADD_USER)
    .switchMap(action =>
      this.usersService.addUser(action.payload)
        .map(user => ({type: ActionsEnums.ADD_USER_SUCCESS, payload: user}))
        .catch(() => Observable.of({type: ActionsEnums.ADD_USER_ERROR})));

  @Effect() editUser$ = this.actions$
    .ofType(ActionsEnums.EDIT_USER)
    .switchMap(action =>
      this.usersService.editUser(action.payload)
        .map(user => ({type: ActionsEnums.EDIT_USER_SUCCESS, payload: user}))
        .catch(() => Observable.of({type: ActionsEnums.EDIT_USER_ERROR})));

  @Effect() deleteUser$ = this.actions$
    .ofType(ActionsEnums.DELETE_USER)
    .switchMap(action =>
      this.usersService.deleteUser(action.payload)
        .map(id => ({type: ActionsEnums.DELETE_USER_SUCCESS, payload: id}))
        .catch(() => Observable.of({type: ActionsEnums.DELETE_USER_ERROR})));
}
