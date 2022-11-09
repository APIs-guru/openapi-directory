import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointCheckUsersSavedShowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckUsersSavedShowsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckUsersSavedShowsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckUsersSavedShowsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointCheckUsersSavedShowsQueryParams;

  @Metadata()
  headers: EndpointCheckUsersSavedShowsHeaders;

  @Metadata()
  security: EndpointCheckUsersSavedShowsSecurity;
}


export class EndpointCheckUsersSavedShowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointCheckUsersSavedShows200ApplicationJsonBooleans?: boolean[];
}
