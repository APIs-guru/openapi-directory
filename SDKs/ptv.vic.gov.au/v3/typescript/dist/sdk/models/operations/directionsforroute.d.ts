import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectionsForRoutePathParams extends SpeakeasyBase {
    routeId: number;
}
export declare class DirectionsForRouteQueryParams extends SpeakeasyBase {
    devid?: string;
    signature?: string;
    token?: string;
}
export declare class DirectionsForRouteRequest extends SpeakeasyBase {
    pathParams: DirectionsForRoutePathParams;
    queryParams: DirectionsForRouteQueryParams;
}
export declare class DirectionsForRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DirectionsResponse?: shared.V3DirectionsResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
