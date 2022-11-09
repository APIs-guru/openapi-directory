import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetUsersTopArtistsAndTracksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class EndpointGetUsersTopArtistsAndTracksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time_range" })
  timeRange?: string;
}


export class EndpointGetUsersTopArtistsAndTracksHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetUsersTopArtistsAndTracksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetUsersTopArtistsAndTracksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetUsersTopArtistsAndTracksPathParams;

  @Metadata()
  queryParams: EndpointGetUsersTopArtistsAndTracksQueryParams;

  @Metadata()
  headers: EndpointGetUsersTopArtistsAndTracksHeaders;

  @Metadata()
  security: EndpointGetUsersTopArtistsAndTracksSecurity;
}


// EndpointGetUsersTopArtistsAndTracks200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetUsersTopArtistsAndTracks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=items" })
  items?: any[];

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


export class EndpointGetUsersTopArtistsAndTracksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointGetUsersTopArtistsAndTracks200ApplicationJsonObject?: EndpointGetUsersTopArtistsAndTracks200ApplicationJson;
}
