import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserApiGetSongRatingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=songId" })
  songId: number;
}

export enum UserApiGetSongRating200ApplicationJsonEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}

export enum UserApiGetSongRating200ApplicationJsonpEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}

export enum UserApiGetSongRating200TextJsonEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}


export class UserApiGetSongRatingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetSongRatingPathParams;
}


export class UserApiGetSongRatingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userApiGetSongRating200ApplicationJsonStringEnum?: UserApiGetSongRating200ApplicationJsonEnum;

  @SpeakeasyMetadata()
  userApiGetSongRating200ApplicationJsonpStringEnum?: UserApiGetSongRating200ApplicationJsonpEnum;

  @SpeakeasyMetadata()
  userApiGetSongRating200TextJsonStringEnum?: UserApiGetSongRating200TextJsonEnum;
}
