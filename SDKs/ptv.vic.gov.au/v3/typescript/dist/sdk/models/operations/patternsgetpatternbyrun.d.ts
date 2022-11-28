import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatternsGetPatternByRunPathParams extends SpeakeasyBase {
    routeType: number;
    runRef: string;
}
export declare enum PatternsGetPatternByRunExpandEnum {
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
export declare class PatternsGetPatternByRunQueryParams extends SpeakeasyBase {
    dateUtc?: Date;
    devid?: string;
    expand: PatternsGetPatternByRunExpandEnum[];
    includeGeopath?: boolean;
    includeSkippedStops?: boolean;
    signature?: string;
    stopId?: number;
    token?: string;
}
export declare class PatternsGetPatternByRunRequest extends SpeakeasyBase {
    pathParams: PatternsGetPatternByRunPathParams;
    queryParams: PatternsGetPatternByRunQueryParams;
}
export declare class PatternsGetPatternByRunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3StoppingPattern?: shared.V3StoppingPattern;
}
