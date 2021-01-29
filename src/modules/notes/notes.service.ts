import { Injectable } from '@nestjs/common';
import { Note, NoteDocument } from './note.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NotesService {

  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(notes: Note[]) {
    return this.noteModel.insertMany(notes);
  }
}
