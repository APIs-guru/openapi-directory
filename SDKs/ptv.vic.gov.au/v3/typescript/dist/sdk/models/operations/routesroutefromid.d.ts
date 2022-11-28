import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoutesRouteFromIdPathParams extends SpeakeasyBase {
    routeId: number;
}
export declare class RoutesRouteFromIdQueryParams extends SpeakeasyBase {
    devid?: string;
    geopathUtc?: Date;
    includeGeopath?: boolean;
    signature?: string;
    token?: string;
}
export declare class RoutesRouteFromIdRequest extends SpeakeasyBase {
    pathParams: RoutesRouteFromIdPathParams;
    queryParams: RoutesRouteFromIdQueryParams;
}
export declare class RoutesRouteFromIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3RouteResponse?: shared.V3RouteResponse;
}
