import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTBUCKET_SERVERS: string[];
export declare class ListBucketPathParams extends SpeakeasyBase {
    rateLimitSid: string;
    serviceSid: string;
}
export declare class ListBucketQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListBucketSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListBucketRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListBucketPathParams;
    queryParams: ListBucketQueryParams;
    security: ListBucketSecurity;
}
export declare class ListBucketListBucketResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListBucketListBucketResponse extends SpeakeasyBase {
    buckets?: shared.VerifyV2ServiceRateLimitBucket[];
    meta?: ListBucketListBucketResponseMeta;
}
export declare class ListBucketResponse extends SpeakeasyBase {
    contentType: string;
    listBucketResponse?: ListBucketListBucketResponse;
    statusCode: number;
}
