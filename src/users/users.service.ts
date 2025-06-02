import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{id:1,name:"hii"}];

  findAll() {
    return this.users;
  }

  create(name: string) {
    this.users.push({ id: this.users.length + 1, name });
    return { message: 'User created',newArr: this.users } ;
  }
}
