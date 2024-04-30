import { Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
const userModel = MongooseModule.forFeature([
  { name: User.name, schema: SchemaFactory.createForClass(User) },
]);

@Module({
  imports: [userModel],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [userModel],
})
export class UsersModule {}
