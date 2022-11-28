import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetMultipleShowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetMultipleShowsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetMultipleShowsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetMultipleShowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetMultipleShowsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetMultipleShowsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetMultipleShowsSecurity;
}


export class EndpointGetMultipleShowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  showsObject?: shared.ShowsObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
