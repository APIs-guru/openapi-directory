import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteBucketServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteBucketPathParams extends SpeakeasyBase {
    rateLimitSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteBucketSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteBucketRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteBucketPathParams;
    security: DeleteBucketSecurity;
}
export declare class DeleteBucketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
