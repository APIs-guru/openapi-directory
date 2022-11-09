import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopsStopsForRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;
}


export class StopsStopsForRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction_id" })
  directionId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=geopath_utc" })
  geopathUtc?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_disruptions" })
  stopDisruptions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class StopsStopsForRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopsStopsForRoutePathParams;

  @Metadata()
  queryParams: StopsStopsForRouteQueryParams;
}


export class StopsStopsForRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3StopsOnRouteResponse?: shared.V3StopsOnRouteResponse;
}
