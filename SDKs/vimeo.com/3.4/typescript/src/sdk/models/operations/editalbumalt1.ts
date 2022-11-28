import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditAlbumAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;
}

export enum EditAlbumAlt1RequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}

export enum EditAlbumAlt1RequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}

export enum EditAlbumAlt1RequestBodySortEnum {
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

export enum EditAlbumAlt1RequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}


export class EditAlbumAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand_color" })
  brandColor?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=hide_nav" })
  hideNav?: boolean;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: EditAlbumAlt1RequestBodyLayoutEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: EditAlbumAlt1RequestBodyPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=review_mode" })
  reviewMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: EditAlbumAlt1RequestBodySortEnum;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: EditAlbumAlt1RequestBodyThemeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=use_custom_domain" })
  useCustomDomain?: boolean;
}


export class EditAlbumAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditAlbumAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditAlbumAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.album+json" })
  request?: EditAlbumAlt1RequestBody;

  @SpeakeasyMetadata()
  security: EditAlbumAlt1Security;
}


export class EditAlbumAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  album?: shared.Album;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
