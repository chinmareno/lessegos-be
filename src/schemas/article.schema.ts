import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema({ toJSON: { virtuals: true }, timestamps: { createdAt: 'created' } })
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  ownerId: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

ArticleSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
