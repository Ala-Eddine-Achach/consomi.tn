import { Prop, Schema } from "@nestjs/mongoose";
import { Product } from "./product.entity";

@Schema({_id:false})
export class Tech extends Product {
    @Prop({required: true})
    batteryLife: string;
    @Prop({required: true})
    brand: string;
    @Prop({required: true})
    cpu: string;
    @Prop({required: true})
    features: string;
    @Prop({required: true})
    gpu: string;
    @Prop({required: true})
    os: string;
    @Prop({required: true})
    ram: string;
    @Prop({required: true})
    screenSize: string;
    @Prop({required: true})
    storage: string;
    @Prop({required: true})
    type: string;
}