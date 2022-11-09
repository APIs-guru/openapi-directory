import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointStartAUsersPlaybackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;
}


export class EndpointStartAUsersPlaybackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointStartAUsersPlaybackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=context_uri" })
  contextUri?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: Map<string, any>;

  @Metadata({ data: "json, name=position_ms" })
  positionMs?: number;

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}


export class EndpointStartAUsersPlaybackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointStartAUsersPlaybackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointStartAUsersPlaybackQueryParams;

  @Metadata()
  headers: EndpointStartAUsersPlaybackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointStartAUsersPlaybackRequestBody;

  @Metadata()
  security: EndpointStartAUsersPlaybackSecurity;
}


export class EndpointStartAUsersPlaybackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
