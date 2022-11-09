import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectionsForRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;
}


export class DirectionsForRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DirectionsForRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectionsForRoutePathParams;

  @Metadata()
  queryParams: DirectionsForRouteQueryParams;
}


export class DirectionsForRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3DirectionsResponse?: shared.V3DirectionsResponse;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
