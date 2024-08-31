import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Deed } from './deeds.model';
import { CreateDeedDto } from './dto/create-deed.dto';

@Injectable()
export class DeedsService {
  constructor(
    @InjectModel(Deed)
    private deedModel: typeof Deed,
  ) {}

  async getAll(): Promise<Deed[]> {
    const deeds = await this.deedModel.findAll();
    return deeds;
  }

  async getOne(id: number): Promise<Deed> {
    const deed = await this.deedModel.findOne({
      where: {
        id,
      },
    });
    return deed;
  }

  async create(dto: CreateDeedDto): Promise<Deed> {
    const deed = await this.deedModel.create(dto);
    return deed;
  }

  async update(id: number, dto: CreateDeedDto) {
    const deed = await this.deedModel.findByPk(id);
    await deed.update(dto);
    return deed;
  }

  async remove(id: number): Promise<void> {
    const deed = await this.getOne(id);
    await deed.destroy();
  }
}
