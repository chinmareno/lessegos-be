import { Connection } from 'mongoose';
import { DATABASE } from '../../constants/database';
import { Wishlist, WishlistSchema } from '../../schemas/wishlist.schema';

export const wishlistProvider = [
  {
    provide: Wishlist.name,
    useFactory: (connection: Connection) =>
      connection.model(Wishlist.name, WishlistSchema),
    inject: [DATABASE.CONNECTION],
  },
];
