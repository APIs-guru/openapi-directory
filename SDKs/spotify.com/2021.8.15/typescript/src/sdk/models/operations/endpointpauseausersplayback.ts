import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointPauseAUsersPlaybackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;
}


export class EndpointPauseAUsersPlaybackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointPauseAUsersPlaybackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointPauseAUsersPlaybackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointPauseAUsersPlaybackQueryParams;

  @Metadata()
  headers: EndpointPauseAUsersPlaybackHeaders;

  @Metadata()
  security: EndpointPauseAUsersPlaybackSecurity;
}


export class EndpointPauseAUsersPlaybackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
