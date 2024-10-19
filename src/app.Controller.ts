import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getUsers() {
    return { name: 'Pawan', email: 'pawan@beyondhimalayatech.com.au' };
  }

  @Post()
  store(@Req() input: Request) {
    return input.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: Number }) {
    return params;
  }

  @Patch('/:userId')
  updateUser(@Req() req: Request) {
    return req.body;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
