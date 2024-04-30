import { Test, TestingModule } from '@nestjs/testing';
import { ProductNotifierController } from './product-notifier.controller';

describe('ProductNotifierController', () => {
  let controller: ProductNotifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductNotifierController],
    }).compile();

    controller = module.get<ProductNotifierController>(ProductNotifierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
