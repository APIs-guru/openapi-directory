import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETERATELIMIT_SERVERS: string[];
export declare class DeleteRateLimitPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteRateLimitSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteRateLimitRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteRateLimitPathParams;
    security: DeleteRateLimitSecurity;
}
export declare class DeleteRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
