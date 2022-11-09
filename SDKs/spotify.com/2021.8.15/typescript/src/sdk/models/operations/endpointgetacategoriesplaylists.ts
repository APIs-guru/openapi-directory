import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetACategoriesPlaylistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;
}


export class EndpointGetACategoriesPlaylistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetACategoriesPlaylistsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetACategoriesPlaylistsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetACategoriesPlaylistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetACategoriesPlaylistsPathParams;

  @Metadata()
  queryParams: EndpointGetACategoriesPlaylistsQueryParams;

  @Metadata()
  headers: EndpointGetACategoriesPlaylistsHeaders;

  @Metadata()
  security: EndpointGetACategoriesPlaylistsSecurity;
}


export class EndpointGetACategoriesPlaylistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  playlistPagingObject?: shared.PlaylistPagingObject;

  @Metadata()
  statusCode: number;
}
