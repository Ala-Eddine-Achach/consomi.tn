import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/entities/user.entity";
import { Product } from "./product/entities/product.entity";
import { AuthModule } from "./auth/auth.module";
import * as dotenv from "dotenv";
import { ImageModule } from "./image/image.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { ParseBoolPipe } from "@nestjs/common/pipes";

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url:"mongodb+srv://consommi:consommi@mainnode.m4kefk0.mongodb.net/?retryWrites=true&w=majority&appName=MainNode",
      synchronize: true,
      entities: [User, Product],
      autoLoadEntities: true,
    }),

    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    ImageModule,
    MorganModule,
  ],
  controllers: [AppController],
  providers: [
    ParseBoolPipe,
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
