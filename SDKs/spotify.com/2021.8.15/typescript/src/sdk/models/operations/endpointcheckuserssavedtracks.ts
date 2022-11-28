import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointCheckUsersSavedTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckUsersSavedTracksHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckUsersSavedTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckUsersSavedTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointCheckUsersSavedTracksQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointCheckUsersSavedTracksHeaders;

  @SpeakeasyMetadata()
  security: EndpointCheckUsersSavedTracksSecurity;
}


export class EndpointCheckUsersSavedTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointCheckUsersSavedTracks200ApplicationJsonBooleans?: boolean[];
}
