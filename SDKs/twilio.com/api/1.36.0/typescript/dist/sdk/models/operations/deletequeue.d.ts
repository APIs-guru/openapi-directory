import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEQUEUE_SERVERS: string[];
export declare class DeleteQueuePathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteQueuePathParams;
    security: DeleteQueueSecurity;
}
export declare class DeleteQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
