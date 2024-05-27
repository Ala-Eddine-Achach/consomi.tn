import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { ProductModule } from "./product/product.module";
import { AuthModule } from "./auth/auth.module";
import * as dotenv from "dotenv";
import { ImageModule } from "./image/image.module";
import { MorganModule } from "nest-morgan";
import { ParseBoolPipe } from "@nestjs/common/pipes";
import { ConversationModule } from "./conversation/conversation.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [ProductModule],
      driver: ApolloDriver,
      typePaths: ["graphQL/schema.graphql"],
      // autoSchemaFile: true,
      /*      typeDefs: `
              # schema.graphql
              type Product {
                id: ID!
                name: String!
                description: String!
                price: Float!
              }
      
              type User {
                id: ID!
                name: String!
                email: String!
              }
      
              type Query {
                getProduct(id: ID!): Product
                getAllProducts: [Product]
                getUser(id: ID!): User
                getAllUsers: [User]
              }
      
              input ProductInput {
                name: String!
                description: String!
                price: Float!
              }
      
              input UserInput {
                name: String!
                email: String!
              }
      
              type Mutation {
                createProduct(input: ProductInput!): Product
                updateProduct(id: ID!, input: ProductInput!): Product
                deleteProduct(id: ID!): Product
                createUser(input: UserInput!): User
                updateUser(id: ID!, input: UserInput!): User
                deleteUser(id: ID!): User
              }
            `,*/
      sortSchema: true,
    }),

    MongooseModule.forRoot(process.env.MONGO_URI),

    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    ProductModule,
    AuthModule,
    ImageModule,
    MorganModule,
    ConversationModule,
  ],
  controllers: [AppController],
  providers: [
    ParseBoolPipe,
    AppService,
    /*     {
      provide: APP_FILTER,
      useClass: LoggingExceptionFilter,
    }, */
    /*{
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor("combined"),
    },*/
  ],
})
export class AppModule {}
