import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop()
  email: String;

  @Prop()
  password: String;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
