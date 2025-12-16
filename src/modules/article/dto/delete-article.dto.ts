import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteArticleDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
