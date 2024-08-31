import { IsEmail, IsNumber, IsString, Length } from 'class-validator';

export class AddFriendDto {
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly friendEmail: string;

  @IsNumber()
  readonly userId: string;
}
