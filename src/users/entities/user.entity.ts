import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ObjectIdColumn } from 'typeorm';
import { Role } from 'src/enum/user-role.enum';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, nullable: false, unique: true})
  email: string;

  @Column({ length: 255, nullable: false })
  name: string;

  @Column({ length: 255, nullable: false })
  lastName: string;

  @Column({ length: 255, nullable: false })
  password: string;

  @Column({ length: 8, nullable: true })
  phone: string;

  @Column({ length: 255, nullable: true })
  city: string;

  @Column({ length: 255, nullable: true })
  street: string;

  @Column({ length: 255, nullable: true })
  postalCode: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  isApproved: boolean;

  @Column({ type: 'enum', enum: Role, nullable: false, default: Role.USER }) // Reference the Role enum
  role: Role;

  @ManyToOne(() => Product, product => product.owner)
  products: Product[];
}
