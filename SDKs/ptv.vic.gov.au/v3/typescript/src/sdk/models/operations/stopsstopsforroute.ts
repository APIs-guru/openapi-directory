import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopsStopsForRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;
}


export class StopsStopsForRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction_id" })
  directionId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geopath_utc" })
  geopathUtc?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_disruptions" })
  stopDisruptions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class StopsStopsForRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopsStopsForRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: StopsStopsForRouteQueryParams;
}


export class StopsStopsForRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3StopsOnRouteResponse?: shared.V3StopsOnRouteResponse;
}
