import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopicDto } from '../../dto/create-topic.dto';
import { Topic } from '../../schemas/topic.schema';

@Injectable()
export class TopicsService {
  constructor(@InjectModel(Topic.name) private readonly topicModel: Model<Topic>) {}

  async create(createTopicDto: CreateTopicDto): Promise<Topic> {
    const topic = new this.topicModel(createTopicDto);
    return topic.save();
  }

  async findAll(): Promise<Topic[]> {
    return this.topicModel.find().exec();
  }

  async findOne(id: string): Promise<Topic> {
    return this.topicModel.findById(id).exec();
    
}

  async update(id: string, updateTopicDto: CreateTopicDto): Promise<Topic> {
    return this.topicModel.findByIdAndUpdate(id, updateTopicDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.topicModel.findByIdAndDelete(id).exec();
  }
}
