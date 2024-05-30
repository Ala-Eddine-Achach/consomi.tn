import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { City } from "src/enum/city.enum";
import { ApproveStatus } from "src/enum/product-approve-status.enum";
import { Category } from "src/enum/product-category.enum";

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

  @IsEnum(ApproveStatus)
  status: ApproveStatus;

  @IsNotEmpty()
  category: Category;

  @IsNotEmpty()
  location: City;

  @IsNotEmpty()
  // @ValidateNested()
  /*  @Type((value: any) => {
            console.log(Object.getOwnPropertyNames(DetailsDTOType));
            const category = value.newObject.category;
            console.log(value.newObject.category);
        
            if (!Object.getOwnPropertyNames(DetailsDTOType).includes(category))
              throw new NotFoundException("Invalid category");
            return DetailsDTOType[value];
          })*/
  details: any;
}

export class ClothesDetailsDto {
  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  functionality?: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsString()
  seasonality?: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsOptional()
  @IsString()
  style?: string;

  @IsOptional()
  @IsString()
  type?: string;
}

export class TechDetailsDto {
  @IsOptional()
  @IsString()
  batteryLife?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  cpu?: string;

  @IsOptional()
  @IsString()
  features?: string;

  @IsOptional()
  @IsString()
  gpu?: string;

  @IsOptional()
  @IsString()
  os?: string;

  @IsOptional()
  @IsString()
  ram?: string;

  @IsOptional()
  @IsString()
  screenSize?: string;

  @IsOptional()
  @IsString()
  storage?: string;

  @IsNotEmpty()
  type: string;
}

const DetailsDTOType = {
  clothes: ClothesDetailsDto,
  tech: TechDetailsDto
};
