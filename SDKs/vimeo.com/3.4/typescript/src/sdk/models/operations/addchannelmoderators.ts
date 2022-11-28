import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddChannelModeratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class AddChannelModeratorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class AddChannelModeratorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddChannelModeratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddChannelModeratorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddChannelModeratorsRequestBody;

  @SpeakeasyMetadata()
  security: AddChannelModeratorsSecurity;
}


export class AddChannelModeratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
