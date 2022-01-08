import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoritesDto } from './dto/create-favorites.dto';
import { UpdateFavoritesDto } from './dto/update-favorites.dto';

@Controller('favorites')
export class FavoritesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  create(@Body() createFavoritesDto: CreateFavoritesDto) {
    return this.favoritesService.createPrisma(createFavoritesDto);
  }

  @Get()
  findAll() {
    return this.favoritesService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.favoritesService.findOnePrisma( +id );
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFavoritesDto: UpdateFavoritesDto) {
    return this.favoritesService.updatePrisma(+id, updateFavoritesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritesService.removePrisma(+id );
  }
}
