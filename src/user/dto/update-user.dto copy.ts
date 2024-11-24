import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  name: String;

  @IsEmail()
  email: String;
}
