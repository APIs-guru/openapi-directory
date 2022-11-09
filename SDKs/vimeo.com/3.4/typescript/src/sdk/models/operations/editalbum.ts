import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditAlbumPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum EditAlbumRequestBodyLayoutEnum {
    Grid = "grid"
,    Player = "player"
}

export enum EditAlbumRequestBodyPrivacyEnum {
    Anybody = "anybody"
,    EmbedOnly = "embed_only"
,    Password = "password"
}

export enum EditAlbumRequestBodySortEnum {
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

export enum EditAlbumRequestBodyThemeEnum {
    Dark = "dark"
,    Standard = "standard"
}


export class EditAlbumRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand_color" })
  brandColor?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=hide_nav" })
  hideNav?: boolean;

  @Metadata({ data: "json, name=layout" })
  layout?: EditAlbumRequestBodyLayoutEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: EditAlbumRequestBodyPrivacyEnum;

  @Metadata({ data: "json, name=review_mode" })
  reviewMode?: boolean;

  @Metadata({ data: "json, name=sort" })
  sort?: EditAlbumRequestBodySortEnum;

  @Metadata({ data: "json, name=theme" })
  theme?: EditAlbumRequestBodyThemeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=use_custom_domain" })
  useCustomDomain?: boolean;
}


export class EditAlbumSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditAlbumRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditAlbumPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.album+json" })
  request?: EditAlbumRequestBody;

  @Metadata()
  security: EditAlbumSecurity;
}


export class EditAlbumResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  album?: shared.Album;

  @Metadata()
  legacyError?: shared.LegacyError;
}
