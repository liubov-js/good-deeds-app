import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(4, 20, {
    message: 'Password length must be more than 4 and less then 20 symbols',
  })
  readonly password: string;
}
