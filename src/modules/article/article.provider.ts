import { Connection } from 'mongoose';
import { DATABASE } from '../../constants/database';
import { Article, ArticleSchema } from '../../schemas/article.schema';

export const articleProvider = [
  {
    provide: Article.name,
    useFactory: (connection: Connection) =>
      connection.model(Article.name, ArticleSchema),
    inject: [DATABASE.CONNECTION],
  },
];
