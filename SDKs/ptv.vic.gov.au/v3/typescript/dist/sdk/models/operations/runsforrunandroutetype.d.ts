import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunsForRunAndRouteTypePathParams extends SpeakeasyBase {
    routeType: number;
    runRef: string;
}
export declare enum RunsForRunAndRouteTypeExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
export declare class RunsForRunAndRouteTypeQueryParams extends SpeakeasyBase {
    dateUtc?: Date;
    devid?: string;
    expand: RunsForRunAndRouteTypeExpandEnum[];
    includeGeopath?: boolean;
    signature?: string;
    token?: string;
}
export declare class RunsForRunAndRouteTypeRequest extends SpeakeasyBase {
    pathParams: RunsForRunAndRouteTypePathParams;
    queryParams: RunsForRunAndRouteTypeQueryParams;
}
export declare class RunsForRunAndRouteTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3RunResponse?: shared.V3RunResponse;
}
