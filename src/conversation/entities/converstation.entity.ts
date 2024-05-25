import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

 // @ManyToOne(() => Product, product => product.conversations)
  //product: Product;

  @Column({ type: 'text', array: true, nullable: true })
  messages: string[];

  // Add other missing fields as needed
}
