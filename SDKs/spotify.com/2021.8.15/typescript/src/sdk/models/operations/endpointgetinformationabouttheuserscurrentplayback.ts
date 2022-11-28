import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=additional_types" })
  additionalTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetInformationAboutTheUsersCurrentPlaybackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity;
}


export class EndpointGetInformationAboutTheUsersCurrentPlaybackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  currentlyPlayingContextObject?: shared.CurrentlyPlayingContextObject;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
