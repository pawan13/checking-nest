import { Injectable } from '@nestjs/common';
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

  update(UpdateUserDTO: UpdateUserDTO, param: { userId: number }) {
    return { UpdateUserDTO, param };
  }
  getOne(param: { userId: number }) {
    return param;
  }
  delete(param: { userId: number }) {
    return param;
  }
}
