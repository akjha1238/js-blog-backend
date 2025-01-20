import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Topic, TopicSchema } from './schemas/topic.schema';  // Import the schema
import { TopicsController } from './controllers/topics/topics.controller';
import { TopicsService } from './services/topics/topics.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }]),  // Register Topic schema
  ],
  controllers: [TopicsController],
  providers: [TopicsService],
})
export class TopicsModule {}
