import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './note.dto';
import { Note, NoteDocument } from './note.schema';

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

  @Get(':id')
  async findById(@Param() param) {
    return this.notesService.findById(param.id)
  }
}
