import { Test } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class NewTestDTO {
  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  title: Test['title'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  question: Test['question'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  correctAlternative: Test['correctAlternative'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  firstAlternative: Test['firstAlternative'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  secondAlternative: Test['secondAlternative'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  thirdAlternative: Test['thirdAlternative'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  fourthAlternative: Test['fourthAlternative'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  part: Test['part'];
}
