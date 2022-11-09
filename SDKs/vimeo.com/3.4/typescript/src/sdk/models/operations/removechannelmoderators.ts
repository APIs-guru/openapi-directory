import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveChannelModeratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class RemoveChannelModeratorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class RemoveChannelModeratorsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveChannelModeratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveChannelModeratorsPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.user+json" })
  request: RemoveChannelModeratorsRequestBody;

  @Metadata()
  security: RemoveChannelModeratorsSecurity;
}


export class RemoveChannelModeratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  user?: shared.User;
}
