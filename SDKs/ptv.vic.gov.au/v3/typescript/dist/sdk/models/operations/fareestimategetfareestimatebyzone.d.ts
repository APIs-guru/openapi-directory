import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FareEstimateGetFareEstimateByZonePathParams extends SpeakeasyBase {
    maxZone: number;
    minZone: number;
}
export declare class FareEstimateGetFareEstimateByZoneQueryParams extends SpeakeasyBase {
    devid?: string;
    isJourneyInFreeTramZone?: boolean;
    journeyTouchOffUtc?: Date;
    journeyTouchOnUtc?: Date;
    signature?: string;
    token?: string;
    travelledRouteTypes?: number[];
}
export declare class FareEstimateGetFareEstimateByZoneRequest extends SpeakeasyBase {
    pathParams: FareEstimateGetFareEstimateByZonePathParams;
    queryParams: FareEstimateGetFareEstimateByZoneQueryParams;
}
export declare class FareEstimateGetFareEstimateByZoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3FareEstimateResponse?: any;
}
