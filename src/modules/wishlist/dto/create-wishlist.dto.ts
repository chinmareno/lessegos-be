import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
