import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';

@Injectable()
export class YearsService {
  constructor(private prisma: PrismaService) { }
  create(createYearDto: Prisma.YearCreateInput) {
    return this.prisma.year.create({
      data: createYearDto
    });
  }

  findAll() {
    return this.prisma.year.findMany();
  }

  findOne(yearId: Prisma.YearWhereUniqueInput) {
    return this.prisma.year.findFirst({
      where: yearId
    });
  }

  update(where: Prisma.YearWhereUniqueInput, data: Prisma.YearUpdateInput) {
    return this.prisma.year.update({
      data,
      where,
    });
  }

  remove(where: Prisma.YearWhereUniqueInput) {
    return this.prisma.year.delete({
      where
    });
  }
}
