import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeedsService } from './deeds.service';
import { CreateDeedDto } from './dto/create-deed.dto';

@Controller('deeds')
export class DeedsController {
  constructor(private deedService: DeedsService) {}

  @Post()
  create(@Body() dto: CreateDeedDto) {
    return this.deedService.create(dto);
  }

  @Get()
  getAll() {
    return this.deedService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.deedService.getOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateDeedDto) {
    return this.deedService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.deedService.remove(id);
  }
}
