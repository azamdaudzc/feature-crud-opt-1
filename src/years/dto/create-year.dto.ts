import { Transform } from "@nestjs/class-transformer";
import { IsInt } from "@nestjs/class-validator";

export class CreateYearDto {
    @IsInt()
    @Transform(({value}) => parseInt(value))
    year: number
}
