import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Float) // Assuming price is a floating-point number
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

  @Field(() => JSON) // Assuming details is a JSON object
  details: any; // Replace 'any' with a specific type if you know the structure
}