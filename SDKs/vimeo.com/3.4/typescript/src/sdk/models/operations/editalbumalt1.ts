import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditAlbumAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;
}

export enum EditAlbumAlt1RequestBodyLayoutEnum {
    Grid = "grid"
,    Player = "player"
}

export enum EditAlbumAlt1RequestBodyPrivacyEnum {
    Anybody = "anybody"
,    EmbedOnly = "embed_only"
,    Password = "password"
}

export enum EditAlbumAlt1RequestBodySortEnum {
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

export enum EditAlbumAlt1RequestBodyThemeEnum {
    Dark = "dark"
,    Standard = "standard"
}


export class EditAlbumAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand_color" })
  brandColor?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=hide_nav" })
  hideNav?: boolean;

  @Metadata({ data: "json, name=layout" })
  layout?: EditAlbumAlt1RequestBodyLayoutEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: EditAlbumAlt1RequestBodyPrivacyEnum;

  @Metadata({ data: "json, name=review_mode" })
  reviewMode?: boolean;

  @Metadata({ data: "json, name=sort" })
  sort?: EditAlbumAlt1RequestBodySortEnum;

  @Metadata({ data: "json, name=theme" })
  theme?: EditAlbumAlt1RequestBodyThemeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=use_custom_domain" })
  useCustomDomain?: boolean;
}


export class EditAlbumAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditAlbumAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: EditAlbumAlt1PathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.album+json" })
  request?: EditAlbumAlt1RequestBody;

  @Metadata()
  security: EditAlbumAlt1Security;
}


export class EditAlbumAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  album?: shared.Album;

  @Metadata()
  legacyError?: shared.LegacyError;
}
