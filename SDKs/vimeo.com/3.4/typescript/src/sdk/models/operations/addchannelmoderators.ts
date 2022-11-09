import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddChannelModeratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class AddChannelModeratorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class AddChannelModeratorsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddChannelModeratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddChannelModeratorsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddChannelModeratorsRequestBody;

  @Metadata()
  security: AddChannelModeratorsSecurity;
}


export class AddChannelModeratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  legacyError?: shared.LegacyError;
}
