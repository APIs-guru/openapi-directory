import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointFollowArtistsUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class EndpointFollowArtistsUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointFollowArtistsUsersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}


export class EndpointFollowArtistsUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointFollowArtistsUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointFollowArtistsUsersQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointFollowArtistsUsersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EndpointFollowArtistsUsersRequestBody;

  @SpeakeasyMetadata()
  security: EndpointFollowArtistsUsersSecurity;
}


export class EndpointFollowArtistsUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
