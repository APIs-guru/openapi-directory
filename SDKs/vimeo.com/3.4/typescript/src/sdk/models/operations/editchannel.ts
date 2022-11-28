import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum EditChannelRequestBodyPrivacyEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    Users = "users"
}


export class EditChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: EditChannelRequestBodyPrivacyEnum;
}


export class EditChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.channel+json" })
  request?: EditChannelRequestBody;

  @SpeakeasyMetadata()
  security: EditChannelSecurity;
}


export class EditChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channel?: shared.Channel;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
