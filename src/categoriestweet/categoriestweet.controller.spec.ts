import { Test, TestingModule } from '@nestjs/testing';
import { CategoriestweetController } from './categoriestweet.controller';
import { CategoriestweetService } from './categoriestweet.service';

describe('CategoriestweetController', () => {
  let controller: CategoriestweetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriestweetController],
      providers: [CategoriestweetService],
    }).compile();

    controller = module.get<CategoriestweetController>(
      CategoriestweetController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
