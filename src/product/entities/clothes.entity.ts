import { Prop, Schema } from "@nestjs/mongoose";
import { Product } from "src/product/entities/product.entity";

// @Schema({_id:false})
// @Schema({ collection: 'products' }) // Setting collection name explicitly
export class Clothes extends Product {
    @Prop({required: true})
    brand: string;
    @Prop({required: true})
    color: number;
    @Prop({required: true})
    functionality: string;
    @Prop({required: true})
    material: string;
    @Prop({required: true})
    seasonality: string;
    @Prop({required: true})
    size: string;
    @Prop({required: true})
    style: string;
    @Prop({required: true})
    type: string;
}