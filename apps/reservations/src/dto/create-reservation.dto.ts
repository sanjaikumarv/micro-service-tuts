import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { CreateChargeDto } from '@app/common';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReservationDto {
  @Field()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @Field()
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  @Field(() => CreateChargeDto)
  charge: CreateChargeDto;
}
