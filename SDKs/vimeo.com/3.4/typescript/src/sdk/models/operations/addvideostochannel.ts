import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideosToChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class AddVideosToChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=video_uri" })
  videoUri: string;
}


export class AddVideosToChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideosToChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideosToChannelPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddVideosToChannelRequestBody;

  @Metadata()
  security: AddVideosToChannelSecurity;
}


export class AddVideosToChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
