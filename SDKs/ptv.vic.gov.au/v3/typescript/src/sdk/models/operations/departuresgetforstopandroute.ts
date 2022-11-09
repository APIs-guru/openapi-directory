import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeparturesGetForStopAndRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_id" })
  routeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stop_id" })
  stopId: number;
}

export enum DeparturesGetForStopAndRouteExpandEnum {
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


export class DeparturesGetForStopAndRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_utc" })
  dateUtc?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction_id" })
  directionId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: DeparturesGetForStopAndRouteExpandEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=gtfs" })
  gtfs?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_cancelled" })
  includeCancelled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=look_backwards" })
  lookBackwards?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DeparturesGetForStopAndRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeparturesGetForStopAndRoutePathParams;

  @Metadata()
  queryParams: DeparturesGetForStopAndRouteQueryParams;
}


export class DeparturesGetForStopAndRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3DeparturesResponse?: shared.V3DeparturesResponse;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
