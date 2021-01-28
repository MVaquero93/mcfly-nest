import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Note } from '../notes/note.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }] })
  favouriteNotes: Note[];
}

export const UserSchema = SchemaFactory.createForClass(User);