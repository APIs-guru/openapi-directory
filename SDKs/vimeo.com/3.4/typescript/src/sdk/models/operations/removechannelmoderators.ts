import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveChannelModeratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class RemoveChannelModeratorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class RemoveChannelModeratorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveChannelModeratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveChannelModeratorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.user+json" })
  request: RemoveChannelModeratorsRequestBody;

  @SpeakeasyMetadata()
  security: RemoveChannelModeratorsSecurity;
}


export class RemoveChannelModeratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  user?: shared.User;
}
