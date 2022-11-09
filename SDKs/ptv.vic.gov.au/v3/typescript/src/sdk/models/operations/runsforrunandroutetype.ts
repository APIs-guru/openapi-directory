import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RunsForRunAndRouteTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_ref" })
  runRef: string;
}

export enum RunsForRunAndRouteTypeExpandEnum {
    All = "All"
,    VehicleDescriptor = "VehicleDescriptor"
,    VehiclePosition = "VehiclePosition"
,    None = "None"
}


export class RunsForRunAndRouteTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_utc" })
  dateUtc?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand: RunsForRunAndRouteTypeExpandEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RunsForRunAndRouteTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RunsForRunAndRouteTypePathParams;

  @Metadata()
  queryParams: RunsForRunAndRouteTypeQueryParams;
}


export class RunsForRunAndRouteTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3RunResponse?: shared.V3RunResponse;
}
