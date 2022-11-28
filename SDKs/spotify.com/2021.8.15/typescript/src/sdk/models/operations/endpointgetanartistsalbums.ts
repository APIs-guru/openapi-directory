import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAnArtistsAlbumsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnArtistsAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_groups" })
  includeGroups?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetAnArtistsAlbumsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnArtistsAlbumsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


// EndpointGetAnArtistsAlbums200ApplicationJson
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class EndpointGetAnArtistsAlbums200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SimplifiedAlbumObject })
  items?: shared.SimplifiedAlbumObject[];

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


export class EndpointGetAnArtistsAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetAnArtistsAlbumsPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetAnArtistsAlbumsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAnArtistsAlbumsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAnArtistsAlbumsSecurity;
}


export class EndpointGetAnArtistsAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointGetAnArtistsAlbums200ApplicationJsonObject?: EndpointGetAnArtistsAlbums200ApplicationJson;
}
