import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveVideosFromChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class RemoveVideosFromChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=video_uri" })
  videoUri: string;
}


export class RemoveVideosFromChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveVideosFromChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveVideosFromChannelPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveVideosFromChannelRequestBody;

  @Metadata()
  security: RemoveVideosFromChannelSecurity;
}


export class RemoveVideosFromChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  video?: shared.Video;
}
