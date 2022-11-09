import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAnAlbumsTracksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnAlbumsTracksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetAnAlbumsTracksHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnAlbumsTracksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnAlbumsTracksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAnAlbumsTracksPathParams;

  @Metadata()
  queryParams: EndpointGetAnAlbumsTracksQueryParams;

  @Metadata()
  headers: EndpointGetAnAlbumsTracksHeaders;

  @Metadata()
  security: EndpointGetAnAlbumsTracksSecurity;
}


// EndpointGetAnAlbumsTracks200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetAnAlbumsTracks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=items", elemType: shared.SimplifiedTrackObject })
  items?: shared.SimplifiedTrackObject[];

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


export class EndpointGetAnAlbumsTracksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointGetAnAlbumsTracks200ApplicationJsonObject?: EndpointGetAnAlbumsTracks200ApplicationJson;
}
