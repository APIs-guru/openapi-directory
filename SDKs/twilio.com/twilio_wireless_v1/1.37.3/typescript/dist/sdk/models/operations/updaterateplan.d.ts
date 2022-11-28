import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateRatePlanServerList: readonly ["https://wireless.twilio.com"];
export declare class UpdateRatePlanPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateRatePlanUpdateRatePlanRequest extends SpeakeasyBase {
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRatePlanPathParams;
    request?: UpdateRatePlanUpdateRatePlanRequest;
    security: UpdateRatePlanSecurity;
}
export declare class UpdateRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wirelessV1RatePlan?: shared.WirelessV1RatePlan;
}
