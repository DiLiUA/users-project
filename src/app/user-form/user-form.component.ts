import { Component, Input, Output, EventEmitter } from '@angular/core';
import {UsersServise} from "../users.service";
import {Store} from "../../../node_modules/@ngrx/store/src/store";
import {editUser} from "../actions/users.actions";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user;

  constructor(private usersServise: UsersServise, private store: Store<any>,) { }

  onSubmit(userForm) {
    if (userForm.valid) {
      const user = Object.assign({}, this.user, userForm.value);
      this.store.dispatch(editUser(user));
      userForm.reset();
    }
  }
}
