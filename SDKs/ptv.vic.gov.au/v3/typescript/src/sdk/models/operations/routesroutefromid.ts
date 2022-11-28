import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RoutesRouteFromIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;
}


export class RoutesRouteFromIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geopath_utc" })
  geopathUtc?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RoutesRouteFromIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RoutesRouteFromIdPathParams;

  @SpeakeasyMetadata()
  queryParams: RoutesRouteFromIdQueryParams;
}


export class RoutesRouteFromIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3RouteResponse?: shared.V3RouteResponse;
}
