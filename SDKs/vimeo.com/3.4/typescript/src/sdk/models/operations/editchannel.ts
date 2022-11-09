import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum EditChannelRequestBodyPrivacyEnum {
    Anybody = "anybody"
,    Moderators = "moderators"
,    Users = "users"
}


export class EditChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: EditChannelRequestBodyPrivacyEnum;
}


export class EditChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditChannelPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.channel+json" })
  request?: EditChannelRequestBody;

  @Metadata()
  security: EditChannelSecurity;
}


export class EditChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  channel?: shared.Channel;

  @Metadata()
  legacyError?: shared.LegacyError;
}
