import { Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {UserModalComponent} from '../user-modal/user-modal.component'
import { Store } from '@ngrx/store';

import {getUsers, deleteUser,} from "../actions/users.actions";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @ViewChild(UserModalComponent) modal:UserModalComponent;

  users: any;
  userData: Object = {user: {}, isAdd: false};

  constructor(private store: Store<any>) {
    this.store.dispatch(getUsers());
    this.users = this.store.select('users');
  }

  deleteUser(user): void {
    this.store.dispatch(deleteUser(user.id));
  }

  showModal(user, isAdd): void {
    this.userData = Object.assign({}, {user: Object.assign({}, user), isAdd});
    this.modal.showChildModal();

  }

  // addUser(user) {
  //   this.store.dispatch(addUser(user));
  // }
}
