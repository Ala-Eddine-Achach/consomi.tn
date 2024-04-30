import { Module } from '@nestjs/common';
import { ProductNotifierService } from './product-notifier.service';
import { ProductNotifierController } from './product-notifier.controller';
import { MongooseModule, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProductNotifier } from './entities/product-notifier.entity';
export const ProductNotifierSchema =
  SchemaFactory.createForClass(ProductNotifier);

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductNotifier.name, schema: ProductNotifierSchema },
    ]),
  ],
  providers: [ProductNotifierService],
  controllers: [ProductNotifierController],
})
export class ProductNotifierModule {}
