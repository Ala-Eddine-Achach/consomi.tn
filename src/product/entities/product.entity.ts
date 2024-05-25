import { Conversation } from 'src/conversation/entities/converstation.entity';
import { City } from 'src/enum/city.enum';
import { ApproveStatus } from 'src/enum/product-approve-status.enum';
import { Category } from 'src/enum/product-category.enum';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, nullable: false, unique: true })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false, default: 1 })
  quantity: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false, default: 0 })
  discount: number;

  @Column({ type: 'boolean', nullable: false, default: true })
  isAvailable: boolean;

  @Column({ type: 'enum', enum: ApproveStatus, nullable: false })
  status: ApproveStatus;

  @Column({ type: 'enum', enum: Category, nullable: false })
  category: Category;

  @Column({ type: 'enum', enum: City, nullable: false })
  location: City;

  @Column({ type: 'json', nullable: false })
  details: ClothesDetails | TechDetails;

  @Column({ type: 'json', array: true, nullable: false, default: [] })
  images: string[];

  @OneToMany(() => User, user => user.products)
    owner: User;
  
 // @OneToMany(() => Conversation, conversation => conversation.product)
   // conversations: Conversation[];
}

type ClothesDetails = {
  brand: string;
  color: number;
  functionality: string;
  material: string;
  seasonality: string;
  size: string;
  style: string;
  type: string;
};

type TechDetails = {
  batteryLife: string;
  brand: string;
  cpu: string;
  features: string;
  gpu: string;
  os: string;
  ram: string;
  screenSize: string;
  storage: string;
  type: string;
};
