import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointStartAUsersPlaybackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;
}


export class EndpointStartAUsersPlaybackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointStartAUsersPlaybackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context_uri" })
  contextUri?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=position_ms" })
  positionMs?: number;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}


export class EndpointStartAUsersPlaybackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointStartAUsersPlaybackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointStartAUsersPlaybackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointStartAUsersPlaybackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointStartAUsersPlaybackRequestBody;

  @SpeakeasyMetadata()
  security: EndpointStartAUsersPlaybackSecurity;
}


export class EndpointStartAUsersPlaybackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
