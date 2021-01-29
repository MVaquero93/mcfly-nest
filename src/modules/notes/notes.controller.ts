import { Body, Controller, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './note.dto';
import { Note } from './note.schema';

@Controller('notes')
export class NotesController {

  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body('notes') notes: NoteDto[]) {
    const result = await this.notesService.create(notes);
    return result
  }
}
