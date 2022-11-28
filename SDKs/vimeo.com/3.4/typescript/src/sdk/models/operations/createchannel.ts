import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateChannelRequestBodyPrivacyEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    User = "user"
}


export class CreateChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy: CreateChannelRequestBodyPrivacyEnum;
}


export class CreateChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.channel+json" })
  request: CreateChannelRequestBody;

  @SpeakeasyMetadata()
  security: CreateChannelSecurity;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channel?: shared.Channel;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
