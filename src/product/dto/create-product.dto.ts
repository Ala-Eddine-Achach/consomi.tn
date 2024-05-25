import { NotFoundException } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsDefined, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { City } from 'src/enum/city.enum';
import { ApproveStatus } from 'src/enum/product-approve-status.enum';
import { Category } from 'src/enum/product-category.enum';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  discount: number;
  @IsNotEmpty()
  isAvailable: boolean;
  @IsNotEmpty()
  @IsEnum(ApproveStatus)
  status: ApproveStatus;
  @IsNotEmpty()
  category: Category;
  @IsNotEmpty()
  location: City;
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  @ValidateNested()
  @Type((value: any) =>{
    console.log(JSON.stringify
    (value)
    );
    if (value.newObject.category==='clothes') 
        return ClothesDetailsDto;
    if (value.newObject.category==='tech')
        return TechDetailsDto;
    throw new NotFoundException('Invalid category');
    
  })
  details: ClothesDetailsDto | TechDetailsDto;
}

export class ClothesDetailsDto {
  @IsNotEmpty()
  brand: string;
  @IsOptional()
  color: number;
  @IsOptional()
  functionality: string;
  @IsOptional()
  material: string;
  @IsOptional()
  seasonality: string;
  @IsOptional()
  size: string;
  @IsOptional()
  style: string;
  @IsOptional()
  type: string;
}

export class TechDetailsDto {
  batteryLife: string;
  brand: string;
  cpu: string;
  features: string;
  gpu: string;
  os: string;
  ram: string;
  screenSize: string;
  storage: string;
  @IsNotEmpty()
  type: string;
}
