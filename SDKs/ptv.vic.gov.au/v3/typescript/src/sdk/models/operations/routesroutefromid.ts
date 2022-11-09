import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RoutesRouteFromIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;
}


export class RoutesRouteFromIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=geopath_utc" })
  geopathUtc?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RoutesRouteFromIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RoutesRouteFromIdPathParams;

  @Metadata()
  queryParams: RoutesRouteFromIdQueryParams;
}


export class RoutesRouteFromIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3RouteResponse?: shared.V3RouteResponse;
}
