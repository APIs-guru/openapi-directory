import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeparturesGetForStopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" })
  routeType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop_id" })
  stopId: number;
}

export enum DeparturesGetForStopExpandEnum {
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


export class DeparturesGetForStopQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_utc" })
  dateUtc?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction_id" })
  directionId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: DeparturesGetForStopExpandEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gtfs" })
  gtfs?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_cancelled" })
  includeCancelled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=look_backwards" })
  lookBackwards?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_results" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_numbers" })
  platformNumbers?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DeparturesGetForStopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeparturesGetForStopPathParams;

  @SpeakeasyMetadata()
  queryParams: DeparturesGetForStopQueryParams;
}


export class DeparturesGetForStopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3DeparturesResponse?: shared.V3DeparturesResponse;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
