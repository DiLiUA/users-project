import { Component, OnInit } from '@angular/core';
import { Http }              from '@angular/http';

import { User } from '../user';
import { UsersServise } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
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

 addUser(user) {
    this.usersServise.addUser({id: 10, name: 'Krog', lastName: 'Konectus', birthday: '01.02.1955', email: 'kkron@gmail.com', phone: '+45896632145'})
 }

}
