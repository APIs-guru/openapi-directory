import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointCheckUsersSavedTracksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckUsersSavedTracksHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckUsersSavedTracksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckUsersSavedTracksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointCheckUsersSavedTracksQueryParams;

  @Metadata()
  headers: EndpointCheckUsersSavedTracksHeaders;

  @Metadata()
  security: EndpointCheckUsersSavedTracksSecurity;
}


export class EndpointCheckUsersSavedTracksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointCheckUsersSavedTracks200ApplicationJsonBooleans?: boolean[];
}
