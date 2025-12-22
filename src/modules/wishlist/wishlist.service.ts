import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { Wishlist } from '../../schemas/wishlist.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetWishlistDto } from './dto/get-wishlist-by-user-id.dto';
import { DeleteWishlistDto } from './dto/delete-wishlist-by-id.dto';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist.name) private wishlistModel: Model<Wishlist>,
  ) {}

  create(createWishlistDto: CreateWishlistDto) {
    return this.wishlistModel.create({
      productName: createWishlistDto.productName,
      userId: createWishlistDto.userId,
    });
  }

  findManyByUserId(getWishlistDto: GetWishlistDto) {
    return this.wishlistModel.find({ userId: getWishlistDto.userId }).exec();
  }

  async delete(deleteWishlistDto: DeleteWishlistDto) {
    const deleted = await this.wishlistModel
      .findByIdAndDelete(deleteWishlistDto.id)
      .exec();
    if (!deleted) {
      throw new NotFoundException(
        `Wishlist with id ${deleteWishlistDto.id} not found`,
      );
    }
  }
}
