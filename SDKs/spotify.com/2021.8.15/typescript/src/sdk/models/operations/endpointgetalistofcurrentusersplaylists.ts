import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAListOfCurrentUsersPlaylistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetAListOfCurrentUsersPlaylistsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAListOfCurrentUsersPlaylistsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAListOfCurrentUsersPlaylistsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetAListOfCurrentUsersPlaylistsQueryParams;

  @Metadata()
  headers: EndpointGetAListOfCurrentUsersPlaylistsHeaders;

  @Metadata()
  security: EndpointGetAListOfCurrentUsersPlaylistsSecurity;
}


// EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson extends SpeakeasyBase {
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


export class EndpointGetAListOfCurrentUsersPlaylistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointGetAListOfCurrentUsersPlaylists200ApplicationJsonObject?: EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson;
}
