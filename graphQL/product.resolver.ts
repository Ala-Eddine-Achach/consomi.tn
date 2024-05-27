// product.resolver.ts
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductService } from "../src/product/product.service";
import { CreateProductDto } from "../src/product/dto/create-product.dto";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../src/auth/guards/jwt-auth.guard";
import { CurrentUser } from "../src/auth/decorators/user.decorator";
import { User } from "../src/users/entities/user.entity";
import { UpdateProductDto } from "../src/product/dto/update-product.dto";
import { Product } from "./product.model";

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
  @UseGuards(JwtAuthGuard)
  async createProduct(
    @Args("input") input: CreateProductDto,
    @CurrentUser() user: User,
  ): Promise<Product> {
    return this.productService.create(input, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation("updateProduct")
  async updateProduct(
    @Args("id") id: string,
    @Args("input") input: UpdateProductDto,
    @CurrentUser() user: User,
  ): Promise<Product> {
    return this.productService.update(id, input);
  }
}
