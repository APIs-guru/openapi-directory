import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointTransferAUsersPlaybackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointTransferAUsersPlaybackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_ids" })
  deviceIds: string[];

  @SpeakeasyMetadata({ data: "json, name=play" })
  play?: boolean;
}


export class EndpointTransferAUsersPlaybackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointTransferAUsersPlaybackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EndpointTransferAUsersPlaybackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EndpointTransferAUsersPlaybackRequestBody;

  @SpeakeasyMetadata()
  security: EndpointTransferAUsersPlaybackSecurity;
}


export class EndpointTransferAUsersPlaybackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
