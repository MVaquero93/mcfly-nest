import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteSchema = Note & Document;

@Schema()
export class Note {
  @Prop()
  text: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);