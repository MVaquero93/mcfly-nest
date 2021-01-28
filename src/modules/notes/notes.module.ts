import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './note.schema';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [
    NotesModule,
    MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }]),
  ]
})
export class NotesModule {}
