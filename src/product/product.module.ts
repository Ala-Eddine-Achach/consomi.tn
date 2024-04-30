import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Clothes } from './entities/clothes.entity';
import { Tech } from './entities/tech.entity';
import { UsersModule } from 'src/users/users.module';

const ProductSchema = SchemaFactory.createForClass(Product);

const ClothesSchema = SchemaFactory.createForClass(Clothes);

const TechSchema = SchemaFactory.createForClass(Tech);

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
        discriminators: [
          { name: Tech.name, schema: TechSchema },
          { name: Clothes.name, schema: ClothesSchema },
        ],
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports : [ ProductService]
})
export class ProductModule {}
