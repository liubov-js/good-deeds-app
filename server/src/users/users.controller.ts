import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddFriendDto } from './dto/add-friend.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.create(userDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Post('/friend')
  addFriend(@Body() dto: AddFriendDto) {
    return this.usersService.addFriend(dto);
  }
}
