import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicsModule } from './topics/topics.module';  // Import TopicsModule
// Other imports...

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/js-blog'),  // MongoDB connection string
    TopicsModule,  // Import TopicsModule where your Topic schema is defined
  ],
  // controllers: [], // any controllers if necessary
  // providers: [], // any providers if necessary
})
export class AppModule {}
