import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
@Schema()
export class ProductNotifier {
  @Prop({ required: true, default: 0 })
  alertPrice: number;
  @Prop({ required: true })
  availability: boolean;
  @Prop()
  discount: string;
  @Prop()
  modifiedInfo: string;
  @Prop()
  priceChange: string;
  // relations
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Product.name })
  product: Product;
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: User.name })
  subscriber: User;
}
