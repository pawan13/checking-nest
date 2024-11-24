import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: String;

  @IsEmail()
  email: String;
}
