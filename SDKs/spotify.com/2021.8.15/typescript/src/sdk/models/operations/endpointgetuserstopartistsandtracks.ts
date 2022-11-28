import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetUsersTopArtistsAndTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class EndpointGetUsersTopArtistsAndTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_range" })
  timeRange?: string;
}


export class EndpointGetUsersTopArtistsAndTracksHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetUsersTopArtistsAndTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


// EndpointGetUsersTopArtistsAndTracks200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetUsersTopArtistsAndTracks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: any[];

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


export class EndpointGetUsersTopArtistsAndTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetUsersTopArtistsAndTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetUsersTopArtistsAndTracksQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetUsersTopArtistsAndTracksHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetUsersTopArtistsAndTracksSecurity;
}


export class EndpointGetUsersTopArtistsAndTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointGetUsersTopArtistsAndTracks200ApplicationJsonObject?: EndpointGetUsersTopArtistsAndTracks200ApplicationJson;
}
