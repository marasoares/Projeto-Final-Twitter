/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetModule } from './tweet/tweet.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { FavoritesModule } from './favorites/favorites.module';
import { CategoriestweetModule } from './categoriestweet/categoriestweet.module';

@Module({
  imports: [UsuarioModule, SeguidoresModule, SeguindoModule, TweetModule, PrismaModule, AuthModule, CategoryModule, FavoritesModule, CategoriestweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
