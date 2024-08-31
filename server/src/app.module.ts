import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { DeedsModule } from './deeds/deeds.module';
import { AuthModule } from './auth/auth.module';
import sequelizeConfig from '../config/sequelize.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot(sequelizeConfig),
    UsersModule,
    DeedsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
