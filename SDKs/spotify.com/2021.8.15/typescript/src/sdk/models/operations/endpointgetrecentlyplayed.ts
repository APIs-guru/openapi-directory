import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetRecentlyPlayedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class EndpointGetRecentlyPlayedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetRecentlyPlayedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetRecentlyPlayedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetRecentlyPlayedQueryParams;

  @Metadata()
  headers: EndpointGetRecentlyPlayedHeaders;

  @Metadata()
  security: EndpointGetRecentlyPlayedSecurity;
}


// EndpointGetRecentlyPlayed200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetRecentlyPlayed200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursors" })
  cursors?: shared.CursorObject;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=items", elemType: shared.PlayHistoryObject })
  items?: shared.PlayHistoryObject[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class EndpointGetRecentlyPlayedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointGetRecentlyPlayed200ApplicationJsonObject?: EndpointGetRecentlyPlayed200ApplicationJson;
}
