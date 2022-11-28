import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateQueueServerList: readonly ["https://api.twilio.com"];
export declare class UpdateQueuePathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class UpdateQueueUpdateQueueRequest extends SpeakeasyBase {
    friendlyName?: string;
    maxSize?: number;
}
export declare class UpdateQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateQueuePathParams;
    request?: UpdateQueueUpdateQueueRequest;
    security: UpdateQueueSecurity;
}
export declare class UpdateQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountQueue?: shared.ApiV2010AccountQueue;
}
