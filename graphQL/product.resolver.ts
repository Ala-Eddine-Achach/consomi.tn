// product.resolver.ts
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductService } from "../src/product/product.service";
import { UseGuards } from "@nestjs/common";
import { User } from "../src/users/entities/user.entity";
import { UpdateProductDto } from "../src/product/dto/update-product.dto";
import { Product } from "./product.model";
import { GqlAuthGuard } from "../src/auth/guards/gql-auth.guard";
import { GQLCurrentUser } from "../src/auth/decorators/gql-user.decorator";
import { CreateProductDto } from "../src/product/dto/create-product.dto";

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query("getProduct")
  async getProduct(@Args("id") id: string): Promise<Product> {
    let pro = await this.productService.findOne(id);
    pro.details = JSON.stringify(pro.details);
    console.log(pro);
    return pro;
  }

  @Query("getAllProducts")
  async getAllProducts(): Promise<Product[]> {
    let pros = await this.productService.findAll();
    pros.forEach(
      (pro, index, array) =>
        (array[index].details = JSON.stringify(pro.details)),
    );
    console.log(pros);
    return pros;
  }

  @Mutation("createProduct")
  @UseGuards(GqlAuthGuard)
  async createProduct(
    @Args("input") input: CreateProductDto,
    @GQLCurrentUser() user: User,
  ): Promise<Product> {
    return this.productService.create(input, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation("updateProduct")
  async updateProduct(
    @Args("id") id: string,
    @Args("input") input: UpdateProductDto,
    @GQLCurrentUser() user: User,
  ): Promise<Product> {
    return this.productService.update(id, input, user.id);
  }
}
