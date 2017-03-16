import { Component, OnInit} from '@angular/core';
import {UserModalComponent} from '../user-modal/user-modal.component'

import { User } from '../user';
import { UsersServise } from '../users.service';
import {ViewChild} from "../../../node_modules/@angular/core/src/metadata/di";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @ViewChild(UserModalComponent) modal:UserModalComponent;

  users: User[];

  constructor(private usersServise: UsersServise) { }

  ngOnInit() {
    this.users = this.usersServise.getUsers();
  }

  editUser(user) {
    this.users = this.usersServise.editUser(user);
  }

  deleteUser(user) {
    this.users = this.usersServise.deleteUser(user.id);
  }

  addUser() {
    this.modal.showChildModal();
  }
}
