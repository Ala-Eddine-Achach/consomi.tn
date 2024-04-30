import { Test, TestingModule } from '@nestjs/testing';
import { ProductNotifierService } from './product-notifier.service';

describe('ProductNotifierService', () => {
  let service: ProductNotifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductNotifierService],
    }).compile();

    service = module.get<ProductNotifierService>(ProductNotifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
