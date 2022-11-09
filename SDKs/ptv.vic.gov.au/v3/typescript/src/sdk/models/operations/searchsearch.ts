import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchSearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=search_term" })
  searchTerm: string;
}


export class SearchSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_addresses" })
  includeAddresses?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_outlets" })
  includeOutlets?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=match_route_by_suburb" })
  matchRouteBySuburb?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=match_stop_by_gtfs_stop_id" })
  matchStopByGtfsStopId?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=match_stop_by_suburb" })
  matchStopBySuburb?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_distance" })
  maxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=route_types" })
  routeTypes?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class SearchSearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchSearchPathParams;

  @Metadata()
  queryParams: SearchSearchQueryParams;
}


export class SearchSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3SearchResult?: shared.V3SearchResult;
}
