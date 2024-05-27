// products/models/product.model.ts
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  discount: number;

  @Field(() => Boolean)
  isAvailable: boolean;

  @Field(() => String)
  status: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  location: string;

  @Field(() => String)
  details: string;
}
