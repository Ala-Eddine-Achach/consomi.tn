// products/dto/product.input.ts
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class ProductInput {
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
  image: string;

  @Field(() => String)
  details: string;
}
