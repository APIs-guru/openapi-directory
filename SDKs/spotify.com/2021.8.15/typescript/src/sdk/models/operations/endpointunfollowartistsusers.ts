import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointUnfollowArtistsUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class EndpointUnfollowArtistsUsersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointUnfollowArtistsUsersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointUnfollowArtistsUsersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointUnfollowArtistsUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointUnfollowArtistsUsersQueryParams;

  @Metadata()
  headers: EndpointUnfollowArtistsUsersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointUnfollowArtistsUsersRequestBody;

  @Metadata()
  security: EndpointUnfollowArtistsUsersSecurity;
}


export class EndpointUnfollowArtistsUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
