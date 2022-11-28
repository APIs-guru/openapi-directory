import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateAlbumAlt1RequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}

export enum CreateAlbumAlt1RequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}

export enum CreateAlbumAlt1RequestBodySortEnum {
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

export enum CreateAlbumAlt1RequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}


export class CreateAlbumAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand_color" })
  brandColor?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hide_nav" })
  hideNav?: boolean;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: CreateAlbumAlt1RequestBodyLayoutEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: CreateAlbumAlt1RequestBodyPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=review_mode" })
  reviewMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: CreateAlbumAlt1RequestBodySortEnum;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: CreateAlbumAlt1RequestBodyThemeEnum;
}


export class CreateAlbumAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateAlbumAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.album+json" })
  request: CreateAlbumAlt1RequestBody;

  @SpeakeasyMetadata()
  security: CreateAlbumAlt1Security;
}


export class CreateAlbumAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  album?: shared.Album;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
