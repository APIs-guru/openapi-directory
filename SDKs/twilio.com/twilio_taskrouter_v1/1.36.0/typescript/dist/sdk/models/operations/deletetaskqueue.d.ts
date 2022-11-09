import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETETASKQUEUE_SERVERS: string[];
export declare class DeleteTaskQueuePathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class DeleteTaskQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTaskQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTaskQueuePathParams;
    security: DeleteTaskQueueSecurity;
}
export declare class DeleteTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
