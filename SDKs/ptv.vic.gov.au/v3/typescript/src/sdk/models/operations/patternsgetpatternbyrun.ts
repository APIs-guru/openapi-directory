import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatternsGetPatternByRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_ref" })
  runRef: string;
}

export enum PatternsGetPatternByRunExpandEnum {
    All = "All"
,    Stop = "Stop"
,    Route = "Route"
,    Run = "Run"
,    Direction = "Direction"
,    Disruption = "Disruption"
,    VehicleDescriptor = "VehicleDescriptor"
,    VehiclePosition = "VehiclePosition"
,    None = "None"
}


export class PatternsGetPatternByRunQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_utc" })
  dateUtc?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand: PatternsGetPatternByRunExpandEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_skipped_stops" })
  includeSkippedStops?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stop_id" })
  stopId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class PatternsGetPatternByRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatternsGetPatternByRunPathParams;

  @Metadata()
  queryParams: PatternsGetPatternByRunQueryParams;
}


export class PatternsGetPatternByRunResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3StoppingPattern?: shared.V3StoppingPattern;
}
