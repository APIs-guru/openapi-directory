import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRateLimitServerList: readonly ["https://verify.twilio.com"];
export declare class FetchRateLimitPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchRateLimitSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRateLimitRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRateLimitPathParams;
    security: FetchRateLimitSecurity;
}
export declare class FetchRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
