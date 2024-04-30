import { Prop, Schema } from "@nestjs/mongoose";
import { Address } from "src/common/address/address";
import { Role } from "src/enum/user-role.enum";
@Schema()
export class User {
    @Prop({ required: true })
    address: Address;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    password: string;
    @Prop({ required: true, maxlength: 8, minlength: 8 })
    phone: string;
    @Prop({ required: true })
    lastName: string;
    @Prop({ required: true  ,default: false})
    isApproved: boolean;
    @Prop({ required: true, enum:Role,default:Role.USER }) // Reference the Role enum
    role: Role;
}