import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointToggleShuffleForUsersPlaybackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: boolean;
}


export class EndpointToggleShuffleForUsersPlaybackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointToggleShuffleForUsersPlaybackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointToggleShuffleForUsersPlaybackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointToggleShuffleForUsersPlaybackQueryParams;

  @Metadata()
  headers: EndpointToggleShuffleForUsersPlaybackHeaders;

  @Metadata()
  security: EndpointToggleShuffleForUsersPlaybackSecurity;
}


export class EndpointToggleShuffleForUsersPlaybackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
