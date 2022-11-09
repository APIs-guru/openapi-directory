import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EditUserAlt1RequestBodyVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum EditUserAlt1RequestBodyVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum EditUserAlt1RequestBodyVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class EditUserAlt1RequestBodyVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: EditUserAlt1RequestBodyVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: EditUserAlt1RequestBodyVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: EditUserAlt1RequestBodyVideosPrivacyViewEnum;
}


export class EditUserAlt1RequestBodyVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: EditUserAlt1RequestBodyVideosPrivacy;
}


export class EditUserAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bio" })
  bio?: string;

  @Metadata({ data: "json, name=content_filter" })
  contentFilter?: string[];

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=videos" })
  videos?: EditUserAlt1RequestBodyVideos;
}


export class EditUserAlt1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/vnd.vimeo.user+json" })
  request?: EditUserAlt1RequestBody;
}


export class EditUserAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;
}
