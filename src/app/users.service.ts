import { User } from './user';

export class UsersServise {
  users: User[] = [
    {id: 1, name: 'Jane', lastName: 'Air', birthday: '01.02.2001', email: 'jane.air@air.com', phone: '+380558874563'},
    {id: 2, name: 'Vasya', lastName: 'Pupkin', birthday: '01.02.1992', email: 'vasul.pupkin@gmail.com', phone: '+79151478852'},
    {id: 3, name: 'Kris', lastName: 'Kargus', birthday: '01.02.1967', email: 'kargus.kris67@gmail.com', phone: '+45896632145'},
  ];

  getUsers():User[] {
    return this.users;
  }

  findOne(id): number {
    let index: number = null;

    this.users.forEach((item, i) => {
      if (+item.id === id) {
        return index = i;
      }
    });

    return index;
  }

  deleteUser(id:number): User[] {
    const index: number = this.findOne(id);
    this.users.splice(index, 1);
    return this.users;
  }

  editUser(user): User[] {
    const index: number = this.findOne(user.id);
    user.name = user.name + '123465';
    this.users.splice(index, 1, user);
    return this.users
  }

  addUser(user:User): User[] {
    return this.users.push(user);
  }
}
