import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ModelsService {
  constructor(private prisma: PrismaService) { }

  create(createModelDto: Prisma.ModelUncheckedCreateInput) {
    return this.prisma.model.create({
      data: createModelDto
    });
  }

  findAll() {
    return this.prisma.model.findMany({
      select: {
        name: true,
        year: {
          select: {
            year: true
          }
        },
        make: {
          select: {
            name: true
          }
        }
      }
    });
  }

  findOne(modelId: Prisma.ModelWhereUniqueInput) {
    return this.prisma.model.findFirst({
      where: modelId,
      select: {
        name: true,
        year: {
          select: {
            year: true
          }
        },
        make: {
          select: {
            name: true
          }
        }
      }
    });
  }

  update(where: Prisma.ModelWhereUniqueInput, data: Prisma.ModelUncheckedUpdateInput) {
    return this.prisma.model.update({
      where,
      data
    });
  }

  remove(where: Prisma.ModelWhereUniqueInput) {
    return this.prisma.model.delete({
      where
    });
  }
}
