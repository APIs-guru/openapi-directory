import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeparturesGetForStopPathParams extends SpeakeasyBase {
    routeType: number;
    stopId: number;
}
export declare enum DeparturesGetForStopExpandEnum {
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
export declare class DeparturesGetForStopQueryParams extends SpeakeasyBase {
    dateUtc?: Date;
    devid?: string;
    directionId?: number;
    expand?: DeparturesGetForStopExpandEnum[];
    gtfs?: boolean;
    includeCancelled?: boolean;
    includeGeopath?: boolean;
    lookBackwards?: boolean;
    maxResults?: number;
    platformNumbers?: number[];
    signature?: string;
    token?: string;
}
export declare class DeparturesGetForStopRequest extends SpeakeasyBase {
    pathParams: DeparturesGetForStopPathParams;
    queryParams: DeparturesGetForStopQueryParams;
}
export declare class DeparturesGetForStopResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DeparturesResponse?: shared.V3DeparturesResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
