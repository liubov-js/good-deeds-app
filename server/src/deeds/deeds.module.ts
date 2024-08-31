import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeedsController } from './deeds.controller';
import { DeedsService } from './deeds.service';
import { Deed } from './deeds.model';
import { User } from 'src/users/users.model';

@Module({
  controllers: [DeedsController],
  providers: [DeedsService],
  imports: [SequelizeModule.forFeature([User, Deed])],
})
export class DeedsModule {}
