import {Observable} from "../../node_modules/rxjs/Observable";
import {Injectable} from "../../node_modules/@angular/core/src/di/metadata";
import {EventEmitter} from '@angular/core';

@Injectable()
export class UsersServise {

  public addOrEditUser = new EventEmitter();

  getUsers() {
    const users = [
      {id: 1, name: '', lastName: 'Air', birthday: '01.02.2001', email: 'jane.air@air.com', phone: '+380558874563'},
      {id: 2, name: 'Vasya123', lastName: 'Pupkin', birthday: '01.02.1992', email: 'vasul.pupkin@gmail.com', phone: '+79151478852'},
    ];
    return Observable.timer(1000).mapTo(users);
  }

  deleteUser(id) {
    return Observable.timer(1000).mapTo(id);
  }

  editUser(user) {
    return Observable.timer(1000).mapTo(user);
  }

  addUser(user){
    user.id = Math.random();
    return Observable.timer(1000).mapTo(user);
  }
}
