import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetFeaturedPlaylistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: string;
}


export class EndpointGetFeaturedPlaylistsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetFeaturedPlaylistsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetFeaturedPlaylistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetFeaturedPlaylistsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetFeaturedPlaylistsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetFeaturedPlaylistsSecurity;
}


export class EndpointGetFeaturedPlaylistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  featuredPlaylistObject?: shared.FeaturedPlaylistObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
