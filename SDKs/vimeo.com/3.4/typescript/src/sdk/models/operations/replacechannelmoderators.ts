import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplaceChannelModeratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class ReplaceChannelModeratorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class ReplaceChannelModeratorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceChannelModeratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplaceChannelModeratorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ReplaceChannelModeratorsRequestBody;

  @SpeakeasyMetadata()
  security: ReplaceChannelModeratorsSecurity;
}


export class ReplaceChannelModeratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
