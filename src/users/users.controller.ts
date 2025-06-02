import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body('name') name: string) {
    return this.usersService.create(name);
    // return console.log(name)
  }
}
