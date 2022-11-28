import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopsStopsForRoutePathParams extends SpeakeasyBase {
    routeId: number;
    routeType: number;
}
export declare class StopsStopsForRouteQueryParams extends SpeakeasyBase {
    devid?: string;
    directionId?: number;
    geopathUtc?: Date;
    includeGeopath?: boolean;
    signature?: string;
    stopDisruptions?: boolean;
    token?: string;
}
export declare class StopsStopsForRouteRequest extends SpeakeasyBase {
    pathParams: StopsStopsForRoutePathParams;
    queryParams: StopsStopsForRouteQueryParams;
}
export declare class StopsStopsForRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3StopsOnRouteResponse?: shared.V3StopsOnRouteResponse;
}
