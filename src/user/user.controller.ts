import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
  getUser(@Param() param: { userId: number }) {
    return this.userService.getOne(param);
  }

  @Patch('/:userId')
  updateUser(
    @Body() UpdateUserDTO: UpdateUserDTO,
    @Param() param: { userId: number },
  ) {
    return this.userService.update(UpdateUserDTO, param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}
