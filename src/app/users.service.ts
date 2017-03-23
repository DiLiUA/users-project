import {Observable} from "../../node_modules/rxjs/Observable";
import {Injectable} from "../../node_modules/@angular/core/src/di/metadata";

@Injectable()
export class UsersServise {

  getUsers() {
    const users = [
      {id: 1, name: 'Jane', lastName: 'Air', birthday: '01.02.2001', email: 'jane.air@air.com', phone: '+380558874563'},
      {id: 2, name: 'Vasya', lastName: 'Pupkin', birthday: '01.02.1992', email: 'vasul.pupkin@gmail.com', phone: '+79151478852'},
    ];
    return Observable.timer(1000).mapTo(users);
  }

  deleteUser(id) {
    return Observable.timer(1000).mapTo(id);
  }

  editUser(user) {
    let copy = Object.assign({}, user);
    copy.name = "DIMAS";
    return Observable.timer(1000).mapTo(copy);
  }

  addUser(user){
    user.id = Math.random();
    return Observable.timer(1000).mapTo(user);
  }
}
