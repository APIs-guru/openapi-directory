import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideosToChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class AddVideosToChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=video_uri" })
  videoUri: string;
}


export class AddVideosToChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideosToChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideosToChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddVideosToChannelRequestBody;

  @SpeakeasyMetadata()
  security: AddVideosToChannelSecurity;
}


export class AddVideosToChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
