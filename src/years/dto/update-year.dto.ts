import { PartialType } from '@nestjs/mapped-types';
import { Transform } from '@nestjs/class-transformer';
import { CreateYearDto } from './create-year.dto';
import { IsInt } from '@nestjs/class-validator';

export class UpdateYearDto extends PartialType(CreateYearDto) {
    @IsInt()
    @Transform(({value}) => parseInt(value))
    year: number
}
