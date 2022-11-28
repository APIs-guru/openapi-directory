import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserApiGetSongRatingForCurrentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=songId" })
  songId: number;
}

export enum UserApiGetSongRatingForCurrent200ApplicationJsonEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}

export enum UserApiGetSongRatingForCurrent200ApplicationJsonpEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}

export enum UserApiGetSongRatingForCurrent200TextJsonEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}


export class UserApiGetSongRatingForCurrentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetSongRatingForCurrentPathParams;
}


export class UserApiGetSongRatingForCurrentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userApiGetSongRatingForCurrent200ApplicationJsonStringEnum?: UserApiGetSongRatingForCurrent200ApplicationJsonEnum;

  @SpeakeasyMetadata()
  userApiGetSongRatingForCurrent200ApplicationJsonpStringEnum?: UserApiGetSongRatingForCurrent200ApplicationJsonpEnum;

  @SpeakeasyMetadata()
  userApiGetSongRatingForCurrent200TextJsonStringEnum?: UserApiGetSongRatingForCurrent200TextJsonEnum;
}
