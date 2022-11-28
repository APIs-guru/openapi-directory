import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveVideosFromChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class RemoveVideosFromChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=video_uri" })
  videoUri: string;
}


export class RemoveVideosFromChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveVideosFromChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveVideosFromChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveVideosFromChannelRequestBody;

  @SpeakeasyMetadata()
  security: RemoveVideosFromChannelSecurity;
}


export class RemoveVideosFromChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
