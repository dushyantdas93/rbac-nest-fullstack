import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class UserPermission {
  @Prop({ ref: 'User', required: true })
  user: mongoose.Types.ObjectId;

  @Prop({ ref: 'ModuleEntity', required: true })
  module: mongoose.Types.ObjectId;

  @Prop() create: boolean;
  @Prop() read: boolean;
  @Prop() update: boolean;
  @Prop() delete: boolean;
}

export const UserPermissionSchema = SchemaFactory.createForClass(UserPermission);

UserPermissionSchema.index({ user: 1, module: 1 }, { unique: true });
