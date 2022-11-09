import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetSeveralTracksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetSeveralTracksHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetSeveralTracksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetSeveralTracksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetSeveralTracksQueryParams;

  @Metadata()
  headers: EndpointGetSeveralTracksHeaders;

  @Metadata()
  security: EndpointGetSeveralTracksSecurity;
}


export class EndpointGetSeveralTracksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  tracksObject?: shared.TracksObject;
}
