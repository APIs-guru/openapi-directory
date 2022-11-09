import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserApiGetSongRatingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=songId" })
  songId: number;
}


export class UserApiGetSongRatingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetSongRatingPathParams;
}

export enum UserApiGetSongRating200ApplicationJsonEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}

export enum UserApiGetSongRating200ApplicationJsonpEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}

export enum UserApiGetSongRating200TextJsonEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}


export class UserApiGetSongRatingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userApiGetSongRating200ApplicationJsonStringEnum?: UserApiGetSongRating200ApplicationJsonEnum;

  @Metadata()
  userApiGetSongRating200ApplicationJsonpStringEnum?: UserApiGetSongRating200ApplicationJsonpEnum;

  @Metadata()
  userApiGetSongRating200TextJsonStringEnum?: UserApiGetSongRating200TextJsonEnum;
}
