import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';
import { NotesModule } from './notes.module';

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService],
      imports: [NotesModule]
    }).compile();

    service = module.get<NotesService>(NotesService);
  });
});
