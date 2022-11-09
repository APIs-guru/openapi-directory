import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTASKQUEUE_SERVERS: string[];
export declare class FetchTaskQueuePathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class FetchTaskQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskQueuePathParams;
    security: FetchTaskQueueSecurity;
}
export declare class FetchTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
