import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetRecentlyPlayedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class EndpointGetRecentlyPlayedHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetRecentlyPlayedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


// EndpointGetRecentlyPlayed200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetRecentlyPlayed200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursors" })
  cursors?: shared.CursorObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PlayHistoryObject })
  items?: shared.PlayHistoryObject[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class EndpointGetRecentlyPlayedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetRecentlyPlayedQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetRecentlyPlayedHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetRecentlyPlayedSecurity;
}


export class EndpointGetRecentlyPlayedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointGetRecentlyPlayed200ApplicationJsonObject?: EndpointGetRecentlyPlayed200ApplicationJson;
}
