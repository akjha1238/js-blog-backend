import { IsNotEmpty, IsString, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

class SectionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  codeSnippet?: string;
}

export class CreateTopicDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsArray()
  @ArrayNotEmpty()
  sections: SectionDto[];
}
