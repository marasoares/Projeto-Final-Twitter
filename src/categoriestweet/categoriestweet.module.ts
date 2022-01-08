import { Module } from '@nestjs/common';
import { CategoriestweetService } from './categoriestweet.service';
import { CategoriestweetController } from './categoriestweet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriestweetController],
  providers: [CategoriestweetService],
})
export class CategoriestweetModule {}
