import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAlbumPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum CreateAlbumRequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}

export enum CreateAlbumRequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}

export enum CreateAlbumRequestBodySortEnum {
    AddedFirst = "added_first",
    AddedLast = "added_last",
    Alphabetical = "alphabetical",
    Arranged = "arranged",
    Comments = "comments",
    Likes = "likes",
    Newest = "newest",
    Oldest = "oldest",
    Plays = "plays"
}

export enum CreateAlbumRequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}


export class CreateAlbumRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand_color" })
  brandColor?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hide_nav" })
  hideNav?: boolean;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: CreateAlbumRequestBodyLayoutEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: CreateAlbumRequestBodyPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=review_mode" })
  reviewMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: CreateAlbumRequestBodySortEnum;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: CreateAlbumRequestBodyThemeEnum;
}


export class CreateAlbumSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateAlbumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAlbumPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.album+json" })
  request: CreateAlbumRequestBody;

  @SpeakeasyMetadata()
  security: CreateAlbumSecurity;
}


export class CreateAlbumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  album?: shared.Album;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
