import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Deed } from 'src/deeds/deeds.model';
import { UserFriends } from 'src/users/user-friends.model';
import { User } from 'src/users/users.model';

dotenv.config();

const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  models: [User, Deed, UserFriends],
  autoLoadModels: true,
};

export default sequelizeConfig;
