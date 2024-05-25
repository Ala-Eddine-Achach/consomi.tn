import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ImageService } from 'src/image/image.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly imageService: ImageService,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const uuid = require('uuid');
    const image = createProductDto.image;
    delete createProductDto.image;

    const newProduct = {
      id: uuid.v4(),
      ...createProductDto,
      image: [image],
    };

    const product = this.productRepository.create(newProduct);
    await this.productRepository.save(product);
    await this.imageService.changeImagepath(image, newProduct.id);

    return product;
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID '${id}' not found`);
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    this.productRepository.merge(product, updateProductDto);
    return await this.productRepository.save(product);
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }
}
