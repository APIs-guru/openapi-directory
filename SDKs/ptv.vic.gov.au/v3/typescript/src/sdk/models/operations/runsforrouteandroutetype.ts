import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RunsForRouteAndRouteTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;
}

export enum RunsForRouteAndRouteTypeExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}


export class RunsForRouteAndRouteTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_utc" })
  dateUtc?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand: RunsForRouteAndRouteTypeExpandEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RunsForRouteAndRouteTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RunsForRouteAndRouteTypePathParams;

  @SpeakeasyMetadata()
  queryParams: RunsForRouteAndRouteTypeQueryParams;
}


export class RunsForRouteAndRouteTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3RunsResponse?: shared.V3RunsResponse;
}
