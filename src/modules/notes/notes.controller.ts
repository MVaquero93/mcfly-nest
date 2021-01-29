import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './note.dto';
import { Note } from './note.schema';

@Controller('notes')
export class NotesController {

  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body('notes') notes: NoteDto[]) {
    return this.notesService.create(notes);
  }

  @Get()
  async findAll() {
    return this.notesService.findAll();
  }
}
