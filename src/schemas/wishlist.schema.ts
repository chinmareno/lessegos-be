import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WishlistDocument = HydratedDocument<Wishlist>;

@Schema({ toJSON: { virtuals: true } })
export class Wishlist {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  userId: string;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);

WishlistSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
