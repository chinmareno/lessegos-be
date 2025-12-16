import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteWishlistDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
