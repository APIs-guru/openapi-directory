import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListRateLimitServerList: readonly ["https://verify.twilio.com"];
export declare class ListRateLimitPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListRateLimitQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListRateLimitSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRateLimitListRateLimitResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRateLimitListRateLimitResponse extends SpeakeasyBase {
    meta?: ListRateLimitListRateLimitResponseMeta;
    rateLimits?: shared.VerifyV2ServiceRateLimit[];
}
export declare class ListRateLimitRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRateLimitPathParams;
    queryParams: ListRateLimitQueryParams;
    security: ListRateLimitSecurity;
}
export declare class ListRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    listRateLimitResponse?: ListRateLimitListRateLimitResponse;
    statusCode: number;
}
