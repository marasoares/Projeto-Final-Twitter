import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Favorites } from '@prisma/client';
import { CreateFavoritesDto } from './dto/create-favorites.dto';
import { UpdateFavoritesDto } from './dto/update-favorites.dto';

@Injectable()
export class FavoritesService {
  // eslint-disable-next-line prettier/prettier
  constructor (private prisma: PrismaService) {}

  async createPrisma(createFavoritesDto: CreateFavoritesDto): Promise<Favorites> {
    return await this.prisma.favorites.create({
      data: { ...createFavoritesDto },
    });
  }

  async findAllPrisma(): Promise<Favorites[]> {
    return await this.prisma.favorites.findMany();
  }

  async findOnePrisma(id: number): Promise<Favorites> {
    return await this.prisma.favorites.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    updateFavoritesDto: UpdateFavoritesDto,
  ): Promise<Favorites> {
    return await this.prisma.favorites.update({
      data: { ...updateFavoritesDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.favorites.delete({ where: { id } });
  }
}
  