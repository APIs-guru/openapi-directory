import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserApiGetSongRatingForCurrentPathParams extends SpeakeasyBase {
    songId: number;
}
export declare enum UserApiGetSongRatingForCurrent200ApplicationJsonEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare enum UserApiGetSongRatingForCurrent200ApplicationJsonpEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare enum UserApiGetSongRatingForCurrent200TextJsonEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare class UserApiGetSongRatingForCurrentRequest extends SpeakeasyBase {
    pathParams: UserApiGetSongRatingForCurrentPathParams;
}
export declare class UserApiGetSongRatingForCurrentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userApiGetSongRatingForCurrent200ApplicationJsonStringEnum?: UserApiGetSongRatingForCurrent200ApplicationJsonEnum;
    userApiGetSongRatingForCurrent200ApplicationJsonpStringEnum?: UserApiGetSongRatingForCurrent200ApplicationJsonpEnum;
    userApiGetSongRatingForCurrent200TextJsonStringEnum?: UserApiGetSongRatingForCurrent200TextJsonEnum;
}
