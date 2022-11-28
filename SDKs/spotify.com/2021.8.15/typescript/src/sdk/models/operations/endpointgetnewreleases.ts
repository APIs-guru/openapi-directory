import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetNewReleasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetNewReleasesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetNewReleasesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetNewReleasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetNewReleasesQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetNewReleasesHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetNewReleasesSecurity;
}


export class EndpointGetNewReleasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  newReleasesObject?: shared.NewReleasesObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
