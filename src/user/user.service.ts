import { Injectable, ParseIntPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto copy';

@Injectable()
export class UserService {
  get() {
    return { name: 'Pawan', email: 'pawan@beyondhimalayatech.com.au' };
  }

  create(CreateUserDTO: CreateUserDTO) {
    return CreateUserDTO;
  }

  update(UpdateUserDTO: UpdateUserDTO, userId: number) {
    return { UpdateUserDTO, userId };
  }
  getOne(userId: number) {
    return userId;
  }
  delete(userId: number) {
    return userId;
  }
}
