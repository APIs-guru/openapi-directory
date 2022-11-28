import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatternsGetPatternByRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_ref" })
  runRef: string;
}

export enum PatternsGetPatternByRunExpandEnum {
    All = "All",
    Stop = "Stop",
    Route = "Route",
    Run = "Run",
    Direction = "Direction",
    Disruption = "Disruption",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}


export class PatternsGetPatternByRunQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_utc" })
  dateUtc?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand: PatternsGetPatternByRunExpandEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_skipped_stops" })
  includeSkippedStops?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_id" })
  stopId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class PatternsGetPatternByRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatternsGetPatternByRunPathParams;

  @SpeakeasyMetadata()
  queryParams: PatternsGetPatternByRunQueryParams;
}


export class PatternsGetPatternByRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3StoppingPattern?: shared.V3StoppingPattern;
}
