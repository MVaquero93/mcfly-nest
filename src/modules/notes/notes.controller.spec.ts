import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Note, NoteDocument } from './note.schema';

describe('NotesController', () => {
  let notesController: NotesController;
  let notesService: NotesService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    notesController = module.get<NotesController>(NotesController);
    notesService = module.get<NotesService>(NotesService);
  });

  describe('findAll', () => {
    it('should return an array of notes', async () => {
      const result = [{text: 'this is a note'}, {text: 'another note'}];
      jest.spyOn(notesService, 'findAll').mockImplementation( () => Promise.resolve(result)) ;

      expect(await notesController.findAll()).toBe(result);
    });
  });
});
