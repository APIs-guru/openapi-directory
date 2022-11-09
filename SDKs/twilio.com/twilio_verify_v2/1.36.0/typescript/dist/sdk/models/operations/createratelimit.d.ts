import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATERATELIMIT_SERVERS: string[];
export declare class CreateRateLimitPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateRateLimitCreateRateLimitRequest extends SpeakeasyBase {
    description?: string;
    uniqueName: string;
}
export declare class CreateRateLimitSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateRateLimitRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateRateLimitPathParams;
    request?: CreateRateLimitCreateRateLimitRequest;
    security: CreateRateLimitSecurity;
}
export declare class CreateRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
