import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopsStopsByGeolocationPathParams extends SpeakeasyBase {
    latitude: number;
    longitude: number;
}
export declare class StopsStopsByGeolocationQueryParams extends SpeakeasyBase {
    devid?: string;
    maxDistance?: number;
    maxResults?: number;
    routeTypes?: number[];
    signature?: string;
    stopDisruptions?: boolean;
    token?: string;
}
export declare class StopsStopsByGeolocationRequest extends SpeakeasyBase {
    pathParams: StopsStopsByGeolocationPathParams;
    queryParams: StopsStopsByGeolocationQueryParams;
}
export declare class StopsStopsByGeolocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3StopsByDistanceResponse?: shared.V3StopsByDistanceResponse;
}
