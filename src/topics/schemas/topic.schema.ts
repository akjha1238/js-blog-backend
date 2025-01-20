import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Topic extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: [
      {
        title: { type: String, required: true },
        content: { type: String, required: true },
        codeSnippet: { type: String },
      },
    ],
    required: true,
  })
  sections: {
    title: string;
    content: string;
    codeSnippet?: string;
  }[];
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
