import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DirectionsForDirectionAndTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=direction_id" })
  directionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;
}


export class DirectionsForDirectionAndTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DirectionsForDirectionAndTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DirectionsForDirectionAndTypePathParams;

  @SpeakeasyMetadata()
  queryParams: DirectionsForDirectionAndTypeQueryParams;
}


export class DirectionsForDirectionAndTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3DirectionsResponse?: shared.V3DirectionsResponse;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
