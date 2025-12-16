import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from 'src/schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { DeleteArticleDto } from './dto/delete-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  findAll() {
    return this.articleModel.find().exec();
  }

  create(createArticleDto: CreateArticleDto) {
    return this.articleModel.create(createArticleDto);
  }

  edit(id: string, editArticleDto: CreateArticleDto) {
    return this.articleModel.findByIdAndUpdate(id, editArticleDto).exec();
  }

  delete(deleteArticleDto: DeleteArticleDto) {
    return this.articleModel.findByIdAndDelete(deleteArticleDto.id);
  }
}
