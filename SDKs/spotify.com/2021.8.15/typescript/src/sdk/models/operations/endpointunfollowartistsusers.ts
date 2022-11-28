import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointUnfollowArtistsUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class EndpointUnfollowArtistsUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointUnfollowArtistsUsersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointUnfollowArtistsUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointUnfollowArtistsUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointUnfollowArtistsUsersQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointUnfollowArtistsUsersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointUnfollowArtistsUsersRequestBody;

  @SpeakeasyMetadata()
  security: EndpointUnfollowArtistsUsersSecurity;
}


export class EndpointUnfollowArtistsUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
