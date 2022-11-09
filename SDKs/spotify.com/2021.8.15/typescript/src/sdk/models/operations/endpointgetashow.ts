import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAShowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAShowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetAShowHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAShowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAShowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAShowPathParams;

  @Metadata()
  queryParams: EndpointGetAShowQueryParams;

  @Metadata()
  headers: EndpointGetAShowHeaders;

  @Metadata()
  security: EndpointGetAShowSecurity;
}


export class EndpointGetAShowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  showObject?: shared.ShowObject;

  @Metadata()
  statusCode: number;
}
