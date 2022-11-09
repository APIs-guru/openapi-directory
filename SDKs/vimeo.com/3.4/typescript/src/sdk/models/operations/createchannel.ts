import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateChannelRequestBodyPrivacyEnum {
    Anybody = "anybody"
,    Moderators = "moderators"
,    User = "user"
}


export class CreateChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=privacy" })
  privacy: CreateChannelRequestBodyPrivacyEnum;
}


export class CreateChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/vnd.vimeo.channel+json" })
  request: CreateChannelRequestBody;

  @Metadata()
  security: CreateChannelSecurity;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  channel?: shared.Channel;

  @Metadata()
  legacyError?: shared.LegacyError;
}
