import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { Tech } from './entities/tech.entity';
import { User } from 'src/users/entities/user.entity';
import { Category } from 'src/enum/product-category.enum';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
    @InjectModel(User.name) private UserModel: Model<User>,
  ) {}

  async check() {
    const tch: Tech = new Tech();
    tch.batteryLife = 'long';
    tch.brand = 'Samsung';
    tch.cpu = 'i3';
    tch.features = 'string';
    tch.os = 'win';
    tch.price = 15;
    tch.name = 'Samsung A10 ';
    tch.owner = (await this.UserModel.find().exec())[0];
    tch.category =Category.TECH ; 
    const toSave = new this.ProductModel(tch);
    toSave.save();
  }
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
