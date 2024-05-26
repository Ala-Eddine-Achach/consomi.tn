import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductSchema } from 'src/schemas/Product.schema';
import { ImageModule } from 'src/image/image.module';
import { Subscription, SubscriptionSchema } from 'src/subscription/entities/subscription.entity';
import { SseService } from 'src/sse/see.service';
import { SubscriptionService } from 'src/subscription/subscription.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Product",
        schema: ProductSchema,
        discriminators: [
          { name: "Clothes", schema: ProductSchema },
          { name: "Tech", schema: ProductSchema },
        ],
      },
      {
        name: Subscription.name, // Use the name property of the Subscription class
        schema: SubscriptionSchema,
      },
    ]),
    ImageModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, SseService, SubscriptionService],
})
export class ProductModule {}
