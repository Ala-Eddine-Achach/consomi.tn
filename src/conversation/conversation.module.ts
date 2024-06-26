import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { ConversationSchema } from './entities/conversation.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './entities/message.entity';
//import { ChatGateway } from './conversation.gateway';
import { ProductSchema } from 'src/schemas/Product.schema';
import { UserSchema } from 'src/schemas/User.schema';
import { ProductModule } from 'src/product/product.module';
import { UsersModule } from 'src/users/users.module';
import { SocketModule } from 'src/socket/socket.module';


@Module({
  imports: [
    ProductModule,
    MongooseModule.forFeature([
      {
        name: 'Conversation',
        schema: ConversationSchema,
      },
      {
        name: 'Message',
        schema: MessageSchema,
      },
      
     
      
     
    ]), 
    UsersModule,
     
  ],
  controllers: [ConversationController],
  providers: [ ConversationService ],
  exports: [ConversationService],
  
})
export class ConversationModule {}
