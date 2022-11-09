import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAlbumAlt1RequestBodyLayoutEnum {
    Grid = "grid"
,    Player = "player"
}

export enum CreateAlbumAlt1RequestBodyPrivacyEnum {
    Anybody = "anybody"
,    EmbedOnly = "embed_only"
,    Password = "password"
}

export enum CreateAlbumAlt1RequestBodySortEnum {
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

export enum CreateAlbumAlt1RequestBodyThemeEnum {
    Dark = "dark"
,    Standard = "standard"
}


export class CreateAlbumAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand_color" })
  brandColor?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hide_nav" })
  hideNav?: boolean;

  @Metadata({ data: "json, name=layout" })
  layout?: CreateAlbumAlt1RequestBodyLayoutEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: CreateAlbumAlt1RequestBodyPrivacyEnum;

  @Metadata({ data: "json, name=review_mode" })
  reviewMode?: boolean;

  @Metadata({ data: "json, name=sort" })
  sort?: CreateAlbumAlt1RequestBodySortEnum;

  @Metadata({ data: "json, name=theme" })
  theme?: CreateAlbumAlt1RequestBodyThemeEnum;
}


export class CreateAlbumAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateAlbumAlt1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/vnd.vimeo.album+json" })
  request: CreateAlbumAlt1RequestBody;

  @Metadata()
  security: CreateAlbumAlt1Security;
}


export class CreateAlbumAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  album?: shared.Album;

  @Metadata()
  legacyError?: shared.LegacyError;
}
