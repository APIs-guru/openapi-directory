import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetMultipleShowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetMultipleShowsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetMultipleShowsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetMultipleShowsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetMultipleShowsQueryParams;

  @Metadata()
  headers: EndpointGetMultipleShowsHeaders;

  @Metadata()
  security: EndpointGetMultipleShowsSecurity;
}


export class EndpointGetMultipleShowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  showsObject?: shared.ShowsObject;

  @Metadata()
  statusCode: number;
}
