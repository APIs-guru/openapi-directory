import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserApiGetSongRatingPathParams extends SpeakeasyBase {
    id: number;
    songId: number;
}
export declare enum UserApiGetSongRating200ApplicationJsonEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare enum UserApiGetSongRating200ApplicationJsonpEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare enum UserApiGetSongRating200TextJsonEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare class UserApiGetSongRatingRequest extends SpeakeasyBase {
    pathParams: UserApiGetSongRatingPathParams;
}
export declare class UserApiGetSongRatingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userApiGetSongRating200ApplicationJsonStringEnum?: UserApiGetSongRating200ApplicationJsonEnum;
    userApiGetSongRating200ApplicationJsonpStringEnum?: UserApiGetSongRating200ApplicationJsonpEnum;
    userApiGetSongRating200TextJsonStringEnum?: UserApiGetSongRating200TextJsonEnum;
}
