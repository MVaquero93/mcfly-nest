import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { NoteDto } from '../notes/note.dto';
import { UsersService } from './users.service';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  // In a real API you should have the userId from the login session and use @User('id') userId: ObjectId

  @Patch()
  async addFavoriteNotes(@Body('id') userId: ObjectId, @Body('favorites') ids: ObjectId[]) {
    return this.usersService.addFavoriteNotes(userId, ids);
  }

  @Get(':id')
  async getFavoriteNotes(@Param() params) {
    return this.usersService.getFavoriteNotes(params.id)
  }
}
