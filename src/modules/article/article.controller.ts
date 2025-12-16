import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { DeleteArticleDto } from './dto/delete-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() editArticleDto: CreateArticleDto) {
    return this.articleService.edit(id, editArticleDto);
  }

  @Delete(':id')
  delete(@Param() param: DeleteArticleDto) {
    return this.articleService.delete(param);
  }
}
