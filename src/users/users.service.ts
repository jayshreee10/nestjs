import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  public users: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    age: 28,
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    age: 34,
  },
  { 
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    age: 22,
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana@example.com',
    age: 30,
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    age: 40,
  },
];
  private idCount=1;

  create(createUserDto: CreateUserDto) : User[] {
    const newUser : User = {
      id: this.idCount++,
      ...createUserDto
    };
    this.users.push(newUser);
     return this.users;
  }

  findAll():User[] {
    return this.users;
  }

  findOne(id: number): User {
     const user = this.users.find((user)=>user.id === id);
     if(!user){
      throw new NotFoundException(`User with ID ${id} not found`);
     }
     return user;
  }


   update(id: number, updateUserDto: UpdateUserDto): User{
    const user = this.findOne(id);
    console.log(user);
    const updatedUser = { ...user, ...updateUserDto };
    console.log(updatedUser)

    this.users = this.users.map((u) => (u.id === id ? updatedUser : u));
    return user;
  }

  remove(id: number) : User[] {
    const index = this.users.findIndex((user)=>user.id===id);
    if(index === -1){
    throw new NotFoundException(`User with ID ${id} not found`);
    }
      this.users.splice(index, 1);
      return this.users
  }
  
  
}
