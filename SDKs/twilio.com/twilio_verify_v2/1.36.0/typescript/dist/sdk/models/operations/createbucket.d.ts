import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEBUCKET_SERVERS: string[];
export declare class CreateBucketPathParams extends SpeakeasyBase {
    rateLimitSid: string;
    serviceSid: string;
}
export declare class CreateBucketCreateBucketRequest extends SpeakeasyBase {
    interval: number;
    max: number;
}
export declare class CreateBucketSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateBucketRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateBucketPathParams;
    request?: CreateBucketCreateBucketRequest;
    security: CreateBucketSecurity;
}
export declare class CreateBucketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceRateLimitBucket?: shared.VerifyV2ServiceRateLimitBucket;
}
