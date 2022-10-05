import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModelsService } from './models.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { Prisma } from '@prisma/client';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Manage Models')
@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) { }

  @Post()
  create(@Body() createModelDto: Prisma.ModelUncheckedCreateInput) {
    return this.modelsService.create(createModelDto);
  }

  @Get()
  findAll() {
    return this.modelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.modelsService.findOne({ id });
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateModelDto: Prisma.ModelUncheckedUpdateInput) {
    return this.modelsService.update({ id }, updateModelDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.modelsService.remove({ id });
  }
}
