import { Prop, Schema } from "@nestjs/mongoose";
import { City } from "src/enum/city.enum";
import { ApproveStatus } from "src/enum/product-approve-status.enum";
import { Category } from "src/enum/product-category.enum";
import { User } from "src/users/entities/user.entity";
import * as mongoose from "mongoose";
import { Tech } from "./tech.entity";
@Schema({ discriminatorKey: 'category' })
export class Product {
    @Prop({required: true})
    name: string;
    @Prop({required: false})
    description : string;
    @Prop({required: true})
    price: number;
    @Prop({required: true,default:1})
    quantity: number;
    @Prop({required: true,default:0,max:100,min:0})
    discount: number;
    @Prop({required: true, default:true})
    isAvailable: boolean;
    @Prop({required: true, default:ApproveStatus.PENDING})
    status:ApproveStatus;
    
    @Prop({
        type: String,
        required: true,
        enum: Category
      })
    category:Category;
    @Prop({required: true, default:[City.ALL]})
    cities:City[];
    // relations
    @Prop({required: true,  type: mongoose.Schema.Types.ObjectId, ref: User.name})
    owner: User

}

