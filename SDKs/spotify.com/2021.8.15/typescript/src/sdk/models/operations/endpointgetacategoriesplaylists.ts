import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetACategoriesPlaylistsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;
}


export class EndpointGetACategoriesPlaylistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetACategoriesPlaylistsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetACategoriesPlaylistsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetACategoriesPlaylistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetACategoriesPlaylistsPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetACategoriesPlaylistsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetACategoriesPlaylistsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetACategoriesPlaylistsSecurity;
}


export class EndpointGetACategoriesPlaylistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  playlistPagingObject?: shared.PlaylistPagingObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
