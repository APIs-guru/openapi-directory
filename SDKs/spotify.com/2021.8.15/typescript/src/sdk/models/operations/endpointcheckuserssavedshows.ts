import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointCheckUsersSavedShowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckUsersSavedShowsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckUsersSavedShowsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckUsersSavedShowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointCheckUsersSavedShowsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointCheckUsersSavedShowsHeaders;

  @SpeakeasyMetadata()
  security: EndpointCheckUsersSavedShowsSecurity;
}


export class EndpointCheckUsersSavedShowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointCheckUsersSavedShows200ApplicationJsonBooleans?: boolean[];
}
