import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunsForRoutePathParams extends SpeakeasyBase {
    routeId: number;
}
export declare enum RunsForRouteExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
export declare class RunsForRouteQueryParams extends SpeakeasyBase {
    dateUtc?: Date;
    devid?: string;
    expand?: RunsForRouteExpandEnum[];
    signature?: string;
    token?: string;
}
export declare class RunsForRouteRequest extends SpeakeasyBase {
    pathParams: RunsForRoutePathParams;
    queryParams: RunsForRouteQueryParams;
}
export declare class RunsForRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3RunsResponse?: shared.V3RunsResponse;
}
