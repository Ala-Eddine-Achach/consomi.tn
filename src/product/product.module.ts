import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageModule } from 'src/image/image.module';
import { Product } from './entities/product.entity';
import { Conversation } from 'src/conversation/entities/converstation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product,Conversation]),
    
    ImageModule
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
