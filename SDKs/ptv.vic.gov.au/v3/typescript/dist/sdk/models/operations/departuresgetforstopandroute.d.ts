import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeparturesGetForStopAndRoutePathParams extends SpeakeasyBase {
    routeId: string;
    routeType: number;
    stopId: number;
}
export declare enum DeparturesGetForStopAndRouteExpandEnum {
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
export declare class DeparturesGetForStopAndRouteQueryParams extends SpeakeasyBase {
    dateUtc?: Date;
    devid?: string;
    directionId?: number;
    expand?: DeparturesGetForStopAndRouteExpandEnum[];
    gtfs?: boolean;
    includeCancelled?: boolean;
    includeGeopath?: boolean;
    lookBackwards?: boolean;
    maxResults?: number;
    signature?: string;
    token?: string;
}
export declare class DeparturesGetForStopAndRouteRequest extends SpeakeasyBase {
    pathParams: DeparturesGetForStopAndRoutePathParams;
    queryParams: DeparturesGetForStopAndRouteQueryParams;
}
export declare class DeparturesGetForStopAndRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DeparturesResponse?: shared.V3DeparturesResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
