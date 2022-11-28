import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RouteTypesGetRouteTypesQueryParams extends SpeakeasyBase {
    devid?: string;
    signature?: string;
    token?: string;
}
export declare class RouteTypesGetRouteTypesRequest extends SpeakeasyBase {
    queryParams: RouteTypesGetRouteTypesQueryParams;
}
export declare class RouteTypesGetRouteTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3RouteTypesResponse?: shared.V3RouteTypesResponse;
}
