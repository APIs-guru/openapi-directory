import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAlbumPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum CreateAlbumRequestBodyLayoutEnum {
    Grid = "grid"
,    Player = "player"
}

export enum CreateAlbumRequestBodyPrivacyEnum {
    Anybody = "anybody"
,    EmbedOnly = "embed_only"
,    Password = "password"
}

export enum CreateAlbumRequestBodySortEnum {
    AddedFirst = "added_first"
,    AddedLast = "added_last"
,    Alphabetical = "alphabetical"
,    Arranged = "arranged"
,    Comments = "comments"
,    Likes = "likes"
,    Newest = "newest"
,    Oldest = "oldest"
,    Plays = "plays"
}

export enum CreateAlbumRequestBodyThemeEnum {
    Dark = "dark"
,    Standard = "standard"
}


export class CreateAlbumRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand_color" })
  brandColor?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hide_nav" })
  hideNav?: boolean;

  @Metadata({ data: "json, name=layout" })
  layout?: CreateAlbumRequestBodyLayoutEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: CreateAlbumRequestBodyPrivacyEnum;

  @Metadata({ data: "json, name=review_mode" })
  reviewMode?: boolean;

  @Metadata({ data: "json, name=sort" })
  sort?: CreateAlbumRequestBodySortEnum;

  @Metadata({ data: "json, name=theme" })
  theme?: CreateAlbumRequestBodyThemeEnum;
}


export class CreateAlbumSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateAlbumRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAlbumPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.album+json" })
  request: CreateAlbumRequestBody;

  @Metadata()
  security: CreateAlbumSecurity;
}


export class CreateAlbumResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  album?: shared.Album;

  @Metadata()
  legacyError?: shared.LegacyError;
}
