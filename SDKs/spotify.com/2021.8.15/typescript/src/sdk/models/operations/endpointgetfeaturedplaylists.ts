import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetFeaturedPlaylistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: string;
}


export class EndpointGetFeaturedPlaylistsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetFeaturedPlaylistsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetFeaturedPlaylistsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetFeaturedPlaylistsQueryParams;

  @Metadata()
  headers: EndpointGetFeaturedPlaylistsHeaders;

  @Metadata()
  security: EndpointGetFeaturedPlaylistsSecurity;
}


export class EndpointGetFeaturedPlaylistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  featuredPlaylistObject?: shared.FeaturedPlaylistObject;

  @Metadata()
  statusCode: number;
}
