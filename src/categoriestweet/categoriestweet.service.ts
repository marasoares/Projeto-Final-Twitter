import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriestweetDto } from './dto/create-categoriestweet.dto';
import { UpdateCategoriestweetDto } from './dto/update-categoriestweet.dto';
import { Categoriestweet } from './entities/categoriestweet.entity';

@Injectable()
export class CategoriestweetService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createCategoriestweetDto: CreateCategoriestweetDto): Promise<Categoriestweet> {
    return await this.prisma.categoriestweet.create({
      data: { ...createCategoriestweetDto},
    });  
  }

  async findAllPrisma(): Promise<Categoriestweet> {
    return await this.prisma.categoriestweet.findMany();
  }

  async findOnePrisma(id: number): Promise<Categoriestweet> {
    return await this.prisma.categoriestweet.findUnique({ 
      where: { id }, 
    });
  }

  async updatePrisma(
    id: number,
    updateCategoriestweetDto: UpdateCategoriestweetDto,
  ): Promise<Categoriestweet> {
    return await this.prisma.categoriestweet.update({
      data: { ...updateCategoriestweetDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.categoriestweet.delete({ where: { id } });
  }
}
  