import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateRateLimitServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateRateLimitPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateRateLimitUpdateRateLimitRequest extends SpeakeasyBase {
    description?: string;
}
export declare class UpdateRateLimitSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRateLimitRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRateLimitPathParams;
    request?: UpdateRateLimitUpdateRateLimitRequest;
    security: UpdateRateLimitSecurity;
}
export declare class UpdateRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
