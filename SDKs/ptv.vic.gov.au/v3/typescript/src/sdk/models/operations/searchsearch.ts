import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=search_term" })
  searchTerm: string;
}


export class SearchSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_addresses" })
  includeAddresses?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outlets" })
  includeOutlets?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match_route_by_suburb" })
  matchRouteBySuburb?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match_stop_by_gtfs_stop_id" })
  matchStopByGtfsStopId?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match_stop_by_suburb" })
  matchStopBySuburb?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_distance" })
  maxDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=route_types" })
  routeTypes?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class SearchSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchSearchPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchSearchQueryParams;
}


export class SearchSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3SearchResult?: shared.V3SearchResult;
}
