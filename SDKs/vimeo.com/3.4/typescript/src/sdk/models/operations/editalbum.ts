import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditAlbumPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum EditAlbumRequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}

export enum EditAlbumRequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}

export enum EditAlbumRequestBodySortEnum {
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

export enum EditAlbumRequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}


export class EditAlbumRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand_color" })
  brandColor?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=hide_nav" })
  hideNav?: boolean;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: EditAlbumRequestBodyLayoutEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: EditAlbumRequestBodyPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=review_mode" })
  reviewMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: EditAlbumRequestBodySortEnum;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: EditAlbumRequestBodyThemeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=use_custom_domain" })
  useCustomDomain?: boolean;
}


export class EditAlbumSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditAlbumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditAlbumPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.album+json" })
  request?: EditAlbumRequestBody;

  @SpeakeasyMetadata()
  security: EditAlbumSecurity;
}


export class EditAlbumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  album?: shared.Album;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
