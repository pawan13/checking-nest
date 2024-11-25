import { Injectable, ParseIntPipe } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto copy';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRespository: Repository<User>,
  ) {}
  get() {
    return this.userRespository.find();
  }

  create(createUserDto: createUserDto) {
    return this.userRespository.save(createUserDto);
  }

  update(updateUserDto: updateUserDto, userId: number) {
    return this.userRespository.update(userId, updateUserDto);
  }
  getOne(id: number) {
    return this.userRespository.findOne({ where: { id } });
  }
  getByEmail(email: string) {
    return this.userRespository.findOne({ where: { email } });
  }
  delete(userId: number) {
    return this.userRespository.delete(userId);
  }
}
