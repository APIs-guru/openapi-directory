import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointCheckCurrentUserFollowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class EndpointCheckCurrentUserFollowsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckCurrentUserFollowsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckCurrentUserFollowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointCheckCurrentUserFollowsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointCheckCurrentUserFollowsHeaders;

  @SpeakeasyMetadata()
  security: EndpointCheckCurrentUserFollowsSecurity;
}


export class EndpointCheckCurrentUserFollowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointCheckCurrentUserFollows200ApplicationJsonBooleans?: boolean[];
}
