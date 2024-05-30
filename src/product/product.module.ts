import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { ProductSchema } from "src/schemas/Product.schema";
import { ImageModule } from "src/image/image.module";
import {
  Subscription,
  SubscriptionSchema,
} from "src/subscription/entities/subscription.entity";
import { SubscriptionService } from "src/subscription/subscription.service";
import { ProductResolver } from "../../graphQL/product.resolver";
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductSchema } from 'src/schemas/Product.schema';
import { ImageModule } from 'src/image/image.module';
import { Subscription, SubscriptionSchema } from 'src/subscription/entities/subscription.entity';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { SocketModule } from 'src/socket/socket.module';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';

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
    EventEmitterModule.forRoot(),
    

    
  ],
  controllers: [ProductController],
  providers: [ProductService, SubscriptionService, ProductResolver],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
