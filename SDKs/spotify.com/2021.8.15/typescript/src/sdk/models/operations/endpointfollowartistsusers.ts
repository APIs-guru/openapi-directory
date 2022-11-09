import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointFollowArtistsUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class EndpointFollowArtistsUsersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointFollowArtistsUsersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: string[];
}


export class EndpointFollowArtistsUsersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointFollowArtistsUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointFollowArtistsUsersQueryParams;

  @Metadata()
  headers: EndpointFollowArtistsUsersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: EndpointFollowArtistsUsersRequestBody;

  @Metadata()
  security: EndpointFollowArtistsUsersSecurity;
}


export class EndpointFollowArtistsUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
