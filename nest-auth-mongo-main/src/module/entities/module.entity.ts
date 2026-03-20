import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ModuleDocument = ModuleEntity & Document;

@Schema()
export class ModuleEntity {
  @Prop({ required: true, unique: true })
  name: string; // users, attendance, ecommerce

  @Prop()
  description: string;
}


export const ModuleSchema = SchemaFactory.createForClass(ModuleEntity);