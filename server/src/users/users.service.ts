import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddFriendDto } from './dto/add-friend.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async create(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAll() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async addFriend(dto: AddFriendDto) {
    const friend = await this.getByEmail(dto.friendEmail);

    if (!friend) {
      throw new HttpException('Friend not found', HttpStatus.NOT_FOUND);
    }

    const user = await this.userRepository.findByPk(dto.userId);
    await user.$add('friends', friend.id);
    return dto;
  }
}
