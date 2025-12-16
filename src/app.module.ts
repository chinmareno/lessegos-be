import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { WishlistModule } from './modules/wishlist/wishlist.module';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL!),
    WishlistModule,
    ArticleModule,
  ],
})
export class AppModule {}
