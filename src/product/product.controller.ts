import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/user.decorator";
import { User } from "../users/entities/user.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { memoryStorage } from "multer";

@ApiTags("product")
//@Roles(['admin'])
@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("/create/:imageId?")
  @UseGuards(JwtAuthGuard)
  submit(
    @Body() createProductDto: CreateProductDto,
    @CurrentUser() user: User,
    @Param("imageId") imageId: string,
  ) {
    return this.productService.create(createProductDto, user.id, imageId);
  }

  @Post("/discover")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor("file", {
      storage: memoryStorage(), // Use memory storage
    }),
  )
  discover(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: User,
  ) {
    console.log(file.buffer);
    return this.productService.discover(file.buffer);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("property")
  async getMyProducts(@CurrentUser() user) {
    return this.productService.findByUserId(user.id);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const product = await this.productService.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  @Get("owner/:id")
  async getProductOwner(@Param("id") id: string) {
    return this.productService.getProductOwner(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
    @CurrentUser() user,
  ) {
    return this.productService.update(id, updateProductDto, user.id);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.productService.remove(id);
  }
}
