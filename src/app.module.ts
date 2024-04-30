import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { ProductNotifierModule } from './product-notifier/product-notifier.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI||"mongodb+srv://consommi:consommi@mainnode.m4kefk0.mongodb.net/?retryWrites=true&w=majority&appName=MainNode"
),
    ConfigModule.forRoot({isGlobal: true}),
    UsersModule,
    ProductModule,
    ProductNotifierModule,
    
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
