import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopsStopDetailsPathParams extends SpeakeasyBase {
    routeType: number;
    stopId: number;
}
export declare class StopsStopDetailsQueryParams extends SpeakeasyBase {
    devid?: string;
    gtfs?: boolean;
    signature?: string;
    stopAccessibility?: boolean;
    stopAmenities?: boolean;
    stopContact?: boolean;
    stopDisruptions?: boolean;
    stopLocation?: boolean;
    stopStaffing?: boolean;
    stopTicket?: boolean;
    token?: string;
}
export declare class StopsStopDetailsRequest extends SpeakeasyBase {
    pathParams: StopsStopDetailsPathParams;
    queryParams: StopsStopDetailsQueryParams;
}
export declare class StopsStopDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3StopResponse?: shared.V3StopResponse;
}
