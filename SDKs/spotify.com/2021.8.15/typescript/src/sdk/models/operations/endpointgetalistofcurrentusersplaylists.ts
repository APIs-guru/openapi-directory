import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAListOfCurrentUsersPlaylistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetAListOfCurrentUsersPlaylistsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAListOfCurrentUsersPlaylistsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


// EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SimplifiedPlaylistObject })
  items?: shared.SimplifiedPlaylistObject[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class EndpointGetAListOfCurrentUsersPlaylistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetAListOfCurrentUsersPlaylistsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAListOfCurrentUsersPlaylistsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAListOfCurrentUsersPlaylistsSecurity;
}


export class EndpointGetAListOfCurrentUsersPlaylistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointGetAListOfCurrentUsersPlaylists200ApplicationJsonObject?: EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson;
}
