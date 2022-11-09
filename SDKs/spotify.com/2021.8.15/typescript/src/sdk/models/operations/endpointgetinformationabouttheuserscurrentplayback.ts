import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=additional_types" })
  additionalTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetInformationAboutTheUsersCurrentPlaybackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams;

  @Metadata()
  headers: EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders;

  @Metadata()
  security: EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity;
}


export class EndpointGetInformationAboutTheUsersCurrentPlaybackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  currentlyPlayingContextObject?: shared.CurrentlyPlayingContextObject;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
