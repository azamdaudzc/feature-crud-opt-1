import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YearsModule } from './years/years.module';
import { MakesModule } from './makes/makes.module';
import { ModelsModule } from './models/models.module';

@Module({
  imports: [YearsModule, MakesModule, ModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
