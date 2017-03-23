import { Component, OnInit} from '@angular/core';
import {UserModalComponent} from '../user-modal/user-modal.component'
import { Store } from '@ngrx/store';

import { User } from '../user';
import { UsersServise } from '../users.service';
import {ViewChild} from "../../../node_modules/@angular/core/src/metadata/di";
import {getUsers, addUser, deleteUser, editUser} from "../actions/users.actions";
import {ChangeDetectionStrategy} from "../../../node_modules/@angular/core/src/change_detection/constants";
import {AsyncPipe} from "../../../node_modules/@angular/common/src/pipes/async_pipe";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  @ViewChild(UserModalComponent) modal:UserModalComponent;

  users: any;

  constructor(private store: Store<any>) {
    this.store.dispatch(getUsers());
    this.users = this.store.select('users');
  }

  ngOnInit() {

  }

  editUser(user) {
    this.store.dispatch(editUser(user));
  }

  deleteUser(user) {
    this.store.dispatch(deleteUser(user.id));
  }

  addUser() {
    this.store.dispatch(addUser({name: 'Kris', lastName: 'Kargus', birthday: '01.02.1967', email: 'kargus.kris67@gmail.com', phone: '+45896632145'}));
  }
}
