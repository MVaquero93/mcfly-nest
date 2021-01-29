import { Injectable } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async addFavoriteNotes(userId, ids) {
    //TODO: Validate if new ids does not exist
    return this.userModel.updateOne({_id: userId}, { $push: {favoriteNotes: ids}})
  }

  async getFavoriteNotes(userId) {
    return this.userModel.findById(userId).populate('favoriteNotes')
  }
}
