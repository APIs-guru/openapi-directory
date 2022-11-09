import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointTransferAUsersPlaybackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointTransferAUsersPlaybackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_ids" })
  deviceIds: string[];

  @Metadata({ data: "json, name=play" })
  play?: boolean;
}


export class EndpointTransferAUsersPlaybackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointTransferAUsersPlaybackRequest extends SpeakeasyBase {
  @Metadata()
  headers: EndpointTransferAUsersPlaybackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: EndpointTransferAUsersPlaybackRequestBody;

  @Metadata()
  security: EndpointTransferAUsersPlaybackSecurity;
}


export class EndpointTransferAUsersPlaybackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
