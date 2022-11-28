import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OutletsGetOutletsByGeolocationPathParams extends SpeakeasyBase {
    latitude: number;
    longitude: number;
}
export declare class OutletsGetOutletsByGeolocationQueryParams extends SpeakeasyBase {
    devid?: string;
    maxDistance?: number;
    maxResults?: number;
    signature?: string;
    token?: string;
}
export declare class OutletsGetOutletsByGeolocationRequest extends SpeakeasyBase {
    pathParams: OutletsGetOutletsByGeolocationPathParams;
    queryParams: OutletsGetOutletsByGeolocationQueryParams;
}
export declare class OutletsGetOutletsByGeolocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3OutletGeolocationResponse?: shared.V3OutletGeolocationResponse;
}
