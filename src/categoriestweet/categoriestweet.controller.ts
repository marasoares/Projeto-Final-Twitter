import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriestweetService } from './categoriestweet.service';
import { CreateCategoriestweetDto } from './dto/create-categoriestweet.dto';
import { UpdateCategoriestweetDto } from './dto/update-categoriestweet.dto';

@Controller('categoriestweet')
export class CategoriestweetController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly categoriestweetService: CategoriestweetService) {}

  @Post()
  create(@Body() createCategoriestweetDto: CreateCategoriestweetDto) {
    return this.categoriestweetService.createPrisma(createCategoriestweetDto);
  }

  @Get()
  findAll() {
    return this.categoriestweetService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriestweetService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriestweetDto: UpdateCategoriestweetDto) {
    return this.categoriestweetService.updatePrisma(+id, updateCategoriestweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriestweetService.removePrisma(+id);
  }
}
