import { Connection } from 'mongoose';
import { DATABASE } from 'src/constants/database';
import { Article, ArticleSchema } from 'src/schemas/article.schema';

export const articleProvider = [
  {
    provide: Article.name,
    useFactory: (connection: Connection) =>
      connection.model(Article.name, ArticleSchema),
    inject: [DATABASE.CONNECTION],
  },
];
