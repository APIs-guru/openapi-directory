import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEBUCKET_SERVERS: string[];
export declare class UpdateBucketPathParams extends SpeakeasyBase {
    rateLimitSid: string;
    serviceSid: string;
    sid: string;
}
export declare class UpdateBucketUpdateBucketRequest extends SpeakeasyBase {
    interval?: number;
    max?: number;
}
export declare class UpdateBucketSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateBucketRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateBucketPathParams;
    request?: UpdateBucketUpdateBucketRequest;
    security: UpdateBucketSecurity;
}
export declare class UpdateBucketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceRateLimitBucket?: shared.VerifyV2ServiceRateLimitBucket;
}
