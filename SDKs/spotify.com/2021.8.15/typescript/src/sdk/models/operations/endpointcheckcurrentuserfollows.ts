import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointCheckCurrentUserFollowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class EndpointCheckCurrentUserFollowsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckCurrentUserFollowsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckCurrentUserFollowsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointCheckCurrentUserFollowsQueryParams;

  @Metadata()
  headers: EndpointCheckCurrentUserFollowsHeaders;

  @Metadata()
  security: EndpointCheckCurrentUserFollowsSecurity;
}


export class EndpointCheckCurrentUserFollowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointCheckCurrentUserFollows200ApplicationJsonBooleans?: boolean[];
}
