import { Module } from '@nestjs/common';
import { YearsService } from './years.service';
import { YearsController } from './years.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [YearsController],
  providers: [YearsService, PrismaService]
})
export class YearsModule {}
