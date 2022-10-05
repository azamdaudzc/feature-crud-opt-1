import { Transform } from "@nestjs/class-transformer";
import { IsInt, IsOptional, IsString } from "@nestjs/class-validator";

export class CreateModelDto {
    @IsString()
    name: string

    @IsOptional()
    @IsInt()
    @Transform(({value}) => parseInt(value))
    yearId: number

    @IsOptional()
    @IsInt()
    @Transform(({value}) => parseInt(value))
    makeId: number
}
