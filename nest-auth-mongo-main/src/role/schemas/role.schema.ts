// roles/schema/role.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop({ unique: true })
  name: string; // admin, user

  @Prop()
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);