import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum EditUserRequestBodyVideosPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum EditUserRequestBodyVideosPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum EditUserRequestBodyVideosPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class EditUserRequestBodyVideosPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: EditUserRequestBodyVideosPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: EditUserRequestBodyVideosPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: EditUserRequestBodyVideosPrivacyViewEnum;
}


export class EditUserRequestBodyVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: EditUserRequestBodyVideosPrivacy;
}


export class EditUserRequestBody extends SpeakeasyBase {
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
  videos?: EditUserRequestBodyVideos;
}


export class EditUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditUserPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.user+json" })
  request?: EditUserRequestBody;
}


export class EditUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;
}
