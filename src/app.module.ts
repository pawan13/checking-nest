import { Module } from '@nestjs/common';
import { AppController } from './app.Controller';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController],
  imports: [UserModule],
})
export class AppModule {}
