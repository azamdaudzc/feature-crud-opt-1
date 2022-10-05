import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MakesService } from './makes.service';
import { CreateMakeDto } from './dto/create-make.dto';
import { UpdateMakeDto } from './dto/update-make.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Manage Makes')
@Controller('makes')
export class MakesController {
  constructor(private readonly makesService: MakesService) { }

  @Post()
  create(@Body() createMakeDto: CreateMakeDto) {
    return this.makesService.create(createMakeDto);
  }

  @Get()
  findAll() {
    return this.makesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.makesService.findOne({ id });
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMakeDto: UpdateMakeDto) {
    return this.makesService.update({ id }, updateMakeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.makesService.remove({ id });
  }
}
