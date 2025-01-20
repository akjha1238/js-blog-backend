import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TopicsService } from '../../services/topics/topics.service';
import { CreateTopicDto } from '../../dto/create-topic.dto';
import { Topic } from '../../schemas/topic.schema';

@Controller('api/topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post()
  async create(@Body() createTopicDto: CreateTopicDto): Promise<Topic> {
    return this.topicsService.create(createTopicDto);
  }

  @Get()
  async findAll(): Promise<Topic[]> {
    return this.topicsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Topic> {
    return this.topicsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTopicDto: CreateTopicDto
  ): Promise<Topic> {
    return this.topicsService.update(id, updateTopicDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.topicsService.remove(id);
  }
}
