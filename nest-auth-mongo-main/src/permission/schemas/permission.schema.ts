
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModuleEntity } from "src/module/entities/module.entity";

export type PermissionDocument = Permission & Document;


@Schema({ timestamps: true })
export class Permission {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true })
  role: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ModuleEntity.name, required: true })
  module: mongoose.Types.ObjectId;

  @Prop({ default: false }) create: boolean;
  @Prop({ default: false }) read: boolean;
  @Prop({ default: false }) update: boolean;
  @Prop({ default: false }) delete: boolean;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);

// 🔥 important
PermissionSchema.index({ role: 1, module: 1 }, { unique: true });