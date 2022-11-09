import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSetRepeatModeOnUsersPlaybackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class EndpointSetRepeatModeOnUsersPlaybackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSetRepeatModeOnUsersPlaybackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSetRepeatModeOnUsersPlaybackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSetRepeatModeOnUsersPlaybackQueryParams;

  @Metadata()
  headers: EndpointSetRepeatModeOnUsersPlaybackHeaders;

  @Metadata()
  security: EndpointSetRepeatModeOnUsersPlaybackSecurity;
}


export class EndpointSetRepeatModeOnUsersPlaybackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
