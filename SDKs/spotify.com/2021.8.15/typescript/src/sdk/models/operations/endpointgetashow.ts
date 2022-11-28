import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAShowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAShowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetAShowHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAShowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAShowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetAShowPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetAShowQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAShowHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAShowSecurity;
}


export class EndpointGetAShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  showObject?: shared.ShowObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
