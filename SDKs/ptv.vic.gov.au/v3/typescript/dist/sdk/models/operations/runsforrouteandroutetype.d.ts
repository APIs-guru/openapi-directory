import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunsForRouteAndRouteTypePathParams extends SpeakeasyBase {
    routeId: number;
    routeType: number;
}
export declare enum RunsForRouteAndRouteTypeExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
export declare class RunsForRouteAndRouteTypeQueryParams extends SpeakeasyBase {
    dateUtc?: Date;
    devid?: string;
    expand: RunsForRouteAndRouteTypeExpandEnum[];
    signature?: string;
    token?: string;
}
export declare class RunsForRouteAndRouteTypeRequest extends SpeakeasyBase {
    pathParams: RunsForRouteAndRouteTypePathParams;
    queryParams: RunsForRouteAndRouteTypeQueryParams;
}
export declare class RunsForRouteAndRouteTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3RunsResponse?: shared.V3RunsResponse;
}
