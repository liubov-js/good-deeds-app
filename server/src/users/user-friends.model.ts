import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './users.model';

@Table({ tableName: 'user_friends', createdAt: false, updatedAt: false })
export class UserFriends extends Model<UserFriends> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  friendId: number;
}
