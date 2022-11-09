import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceChannelModeratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class ReplaceChannelModeratorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class ReplaceChannelModeratorsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceChannelModeratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceChannelModeratorsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ReplaceChannelModeratorsRequestBody;

  @Metadata()
  security: ReplaceChannelModeratorsSecurity;
}


export class ReplaceChannelModeratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
