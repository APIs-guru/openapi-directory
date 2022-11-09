import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserApiGetSongRatingForCurrentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=songId" })
  songId: number;
}


export class UserApiGetSongRatingForCurrentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetSongRatingForCurrentPathParams;
}

export enum UserApiGetSongRatingForCurrent200ApplicationJsonEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}

export enum UserApiGetSongRatingForCurrent200ApplicationJsonpEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}

export enum UserApiGetSongRatingForCurrent200TextJsonEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}


export class UserApiGetSongRatingForCurrentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userApiGetSongRatingForCurrent200ApplicationJsonStringEnum?: UserApiGetSongRatingForCurrent200ApplicationJsonEnum;

  @Metadata()
  userApiGetSongRatingForCurrent200ApplicationJsonpStringEnum?: UserApiGetSongRatingForCurrent200ApplicationJsonpEnum;

  @Metadata()
  userApiGetSongRatingForCurrent200TextJsonStringEnum?: UserApiGetSongRatingForCurrent200TextJsonEnum;
}
