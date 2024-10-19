import { Module } from '@nestjs/common';
import { AppController } from './app.Controller';

@Module({
  controllers: [AppController],
})
export class AppModule {}
