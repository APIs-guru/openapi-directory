import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectionsForDirectionAndTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=direction_id" })
  directionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;
}


export class DirectionsForDirectionAndTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DirectionsForDirectionAndTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectionsForDirectionAndTypePathParams;

  @Metadata()
  queryParams: DirectionsForDirectionAndTypeQueryParams;
}


export class DirectionsForDirectionAndTypeResponse extends SpeakeasyBase {
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
