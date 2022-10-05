import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YearsService } from './years.service';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Manage Years')
@Controller('years')
export class YearsController {
  constructor(private readonly yearsService: YearsService) { }

  @Post()
  create(@Body() createYearDto: CreateYearDto) {
    return this.yearsService.create(createYearDto);
  }

  @Get()
  findAll() {
    return this.yearsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.yearsService.findOne({ id });
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateYearDto: UpdateYearDto) {
    return this.yearsService.update({ id }, updateYearDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.yearsService.remove({ id });
  }
}
