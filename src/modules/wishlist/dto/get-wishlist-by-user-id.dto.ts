import { IsString, IsNotEmpty } from 'class-validator';

export class GetWishlistDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
}
