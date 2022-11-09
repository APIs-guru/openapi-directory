import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetFollowedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class EndpointGetFollowedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetFollowedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetFollowedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetFollowedQueryParams;

  @Metadata()
  headers: EndpointGetFollowedHeaders;

  @Metadata()
  security: EndpointGetFollowedSecurity;
}


export class EndpointGetFollowedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  followingArtistsObject?: shared.FollowingArtistsObject;

  @Metadata()
  statusCode: number;
}
