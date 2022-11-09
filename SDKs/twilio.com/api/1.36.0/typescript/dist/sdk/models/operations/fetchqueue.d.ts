import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHQUEUE_SERVERS: string[];
export declare class FetchQueuePathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchQueuePathParams;
    security: FetchQueueSecurity;
}
export declare class FetchQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountQueue?: shared.ApiV2010AccountQueue;
}
