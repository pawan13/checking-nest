import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto copy';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() CreateUserDTO: CreateUserDTO) {
    return this.userService.create(CreateUserDTO);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getOne(userId);
  }

  @Patch('/:userId')
  updateUser(
    @Body() UpdateUserDTO: UpdateUserDTO,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(UpdateUserDTO, userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
