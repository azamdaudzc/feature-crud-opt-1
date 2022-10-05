import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MakesService {
  constructor(private prisma: PrismaService){}

  create(createMakeDto: Prisma.MakeCreateInput) {
    return this.prisma.make.create({
      data: createMakeDto
    });
  }

  findAll() {
    return this.prisma.make.findMany();
  }

  findOne(makeId: Prisma.MakeWhereUniqueInput) {
    return this.prisma.make.findFirst({
      where: makeId
    });
  }

  update(where: Prisma.MakeWhereUniqueInput, data: Prisma.MakeUpdateInput) {
    return this.prisma.make.update({
      data,
      where
    });
  }

  remove(where: Prisma.MakeWhereUniqueInput) {
    return this.prisma.make.delete({
      where
    })
  }
}
