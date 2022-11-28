import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetPlaylistsTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointGetPlaylistsTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=additional_types" })
  additionalTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetPlaylistsTracksHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetPlaylistsTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


// EndpointGetPlaylistsTracks200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetPlaylistsTracks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PlaylistTrackObject })
  items?: shared.PlaylistTrackObject[];

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


export class EndpointGetPlaylistsTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetPlaylistsTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetPlaylistsTracksQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetPlaylistsTracksHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetPlaylistsTracksSecurity;
}


export class EndpointGetPlaylistsTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointGetPlaylistsTracks200ApplicationJsonObject?: EndpointGetPlaylistsTracks200ApplicationJson;
}
