import { Connection } from 'mongoose';
import { DATABASE } from 'src/constants/database';
import { Wishlist, WishlistSchema } from 'src/schemas/wishlist.schema';

export const wishlistProvider = [
  {
    provide: Wishlist.name,
    useFactory: (connection: Connection) =>
      connection.model(Wishlist.name, WishlistSchema),
    inject: [DATABASE.CONNECTION],
  },
];
