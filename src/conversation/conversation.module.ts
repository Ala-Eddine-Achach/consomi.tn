import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Conversation } from './entities/converstation.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Conversation, Product])], // Register both entities
  controllers: [],
  providers: [],
})
export class ConversationModule {}