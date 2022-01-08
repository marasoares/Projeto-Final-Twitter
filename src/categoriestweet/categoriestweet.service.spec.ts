import { Test, TestingModule } from '@nestjs/testing';
import { CategoriestweetService } from './categoriestweet.service';

describe('CategoriestweetService', () => {
  let service: CategoriestweetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriestweetService],
    }).compile();

    service = module.get<CategoriestweetService>(CategoriestweetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
