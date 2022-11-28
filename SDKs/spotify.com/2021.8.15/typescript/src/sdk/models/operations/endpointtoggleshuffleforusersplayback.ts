import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointToggleShuffleForUsersPlaybackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: boolean;
}


export class EndpointToggleShuffleForUsersPlaybackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointToggleShuffleForUsersPlaybackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointToggleShuffleForUsersPlaybackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointToggleShuffleForUsersPlaybackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointToggleShuffleForUsersPlaybackHeaders;

  @SpeakeasyMetadata()
  security: EndpointToggleShuffleForUsersPlaybackSecurity;
}


export class EndpointToggleShuffleForUsersPlaybackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
