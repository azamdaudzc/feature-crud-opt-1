import { IsString } from "@nestjs/class-validator";

export class CreateMakeDto {
    @IsString()
    name: string
}
