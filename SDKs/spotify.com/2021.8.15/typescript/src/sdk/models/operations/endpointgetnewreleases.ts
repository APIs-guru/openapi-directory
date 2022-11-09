import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetNewReleasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetNewReleasesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetNewReleasesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetNewReleasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetNewReleasesQueryParams;

  @Metadata()
  headers: EndpointGetNewReleasesHeaders;

  @Metadata()
  security: EndpointGetNewReleasesSecurity;
}


export class EndpointGetNewReleasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  newReleasesObject?: shared.NewReleasesObject;

  @Metadata()
  statusCode: number;
}
