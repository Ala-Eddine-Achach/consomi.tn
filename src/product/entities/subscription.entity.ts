import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false, default: 0 })
  alertPrice: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  availability: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  discount: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  modifiedInfo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  priceChange: string;
}

