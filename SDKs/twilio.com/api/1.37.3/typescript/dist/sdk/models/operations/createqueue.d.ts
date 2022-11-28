import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateQueueServerList: readonly ["https://api.twilio.com"];
export declare class CreateQueuePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class CreateQueueCreateQueueRequest extends SpeakeasyBase {
    friendlyName: string;
    maxSize?: number;
}
export declare class CreateQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateQueuePathParams;
    request?: CreateQueueCreateQueueRequest;
    security: CreateQueueSecurity;
}
export declare class CreateQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountQueue?: shared.ApiV2010AccountQueue;
}
