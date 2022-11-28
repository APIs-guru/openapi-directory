import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetFollowedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class EndpointGetFollowedHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetFollowedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetFollowedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetFollowedQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetFollowedHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetFollowedSecurity;
}


export class EndpointGetFollowedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  followingArtistsObject?: shared.FollowingArtistsObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
