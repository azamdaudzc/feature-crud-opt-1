import { Module } from '@nestjs/common';
import { MakesService } from './makes.service';
import { MakesController } from './makes.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [MakesController],
  providers: [MakesService, PrismaService]
})
export class MakesModule {}
