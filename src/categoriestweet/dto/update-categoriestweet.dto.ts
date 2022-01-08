import { PartialType } from '@nestjs/swagger';
import { CreateCategoriestweetDto } from './create-categoriestweet.dto';

export class UpdateCategoriestweetDto extends PartialType(CreateCategoriestweetDto) {}
