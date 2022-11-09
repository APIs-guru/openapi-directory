import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHRATEPLAN_SERVERS: string[];
export declare class FetchRatePlanPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRatePlanPathParams;
    security: FetchRatePlanSecurity;
}
export declare class FetchRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wirelessV1RatePlan?: shared.WirelessV1RatePlan;
}
