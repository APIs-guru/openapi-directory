import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAnAlbumsTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnAlbumsTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetAnAlbumsTracksHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnAlbumsTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


// EndpointGetAnAlbumsTracks200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetAnAlbumsTracks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SimplifiedTrackObject })
  items?: shared.SimplifiedTrackObject[];

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


export class EndpointGetAnAlbumsTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetAnAlbumsTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetAnAlbumsTracksQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAnAlbumsTracksHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAnAlbumsTracksSecurity;
}


export class EndpointGetAnAlbumsTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointGetAnAlbumsTracks200ApplicationJsonObject?: EndpointGetAnAlbumsTracks200ApplicationJson;
}
