import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHBUCKET_SERVERS: string[];
export declare class FetchBucketPathParams extends SpeakeasyBase {
    rateLimitSid: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchBucketSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchBucketRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchBucketPathParams;
    security: FetchBucketSecurity;
}
export declare class FetchBucketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceRateLimitBucket?: shared.VerifyV2ServiceRateLimitBucket;
}
