import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { WishlistDocument } from 'src/schemas/wishlist.schema';
import { GetWishlistDto } from './dto/get-wishlist-by-user-id.dto';
import { DeleteWishlistDto } from './dto/delete-wishlist-by-id.dto';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}
  @Get()
  getManyByUserId(@Query() query: GetWishlistDto): Promise<WishlistDocument[]> {
    return this.wishlistService.findManyByUserId(query);
  }

  @Post()
  create(
    @Body() createWishlistDto: CreateWishlistDto,
  ): Promise<WishlistDocument> {
    return this.wishlistService.create(createWishlistDto);
  }

  @Delete(':id')
  delete(@Param() param: DeleteWishlistDto) {
    return this.wishlistService.delete(param);
  }
}
