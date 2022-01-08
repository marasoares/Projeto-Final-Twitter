/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCategoriestweetDto {
    @IsNotEmpty()
    @IsInt()
    tweetid: number;

    @IsNotEmpty()
    @IsInt()
    categoryid: number;
}
