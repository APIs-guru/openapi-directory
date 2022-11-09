import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetListUsersPlaylistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class EndpointGetListUsersPlaylistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetListUsersPlaylistsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetListUsersPlaylistsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetListUsersPlaylistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetListUsersPlaylistsPathParams;

  @Metadata()
  queryParams: EndpointGetListUsersPlaylistsQueryParams;

  @Metadata()
  headers: EndpointGetListUsersPlaylistsHeaders;

  @Metadata()
  security: EndpointGetListUsersPlaylistsSecurity;
}


// EndpointGetListUsersPlaylists200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetListUsersPlaylists200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=items", elemType: shared.SimplifiedPlaylistObject })
  items?: shared.SimplifiedPlaylistObject[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class EndpointGetListUsersPlaylistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointGetListUsersPlaylists200ApplicationJsonObject?: EndpointGetListUsersPlaylists200ApplicationJson;
}
