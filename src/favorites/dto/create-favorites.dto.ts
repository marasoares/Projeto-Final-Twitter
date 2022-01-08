/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";


export class CreateFavoritesDto {
    @IsNotEmpty()
    @IsInt()
    tweetid: number

    @IsNotEmpty()
    @IsInt()
    usuarioid: number
}
