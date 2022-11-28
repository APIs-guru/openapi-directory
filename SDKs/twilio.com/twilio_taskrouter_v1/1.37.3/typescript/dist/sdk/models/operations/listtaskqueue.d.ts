import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListTaskQueueServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListTaskQueuePathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class ListTaskQueueQueryParams extends SpeakeasyBase {
    evaluateWorkerAttributes?: string;
    friendlyName?: string;
    ordering?: string;
    pageSize?: number;
    workerSid?: string;
}
export declare class ListTaskQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTaskQueueListTaskQueueResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTaskQueueListTaskQueueResponse extends SpeakeasyBase {
    meta?: ListTaskQueueListTaskQueueResponseMeta;
    taskQueues?: shared.TaskrouterV1WorkspaceTaskQueue[];
}
export declare class ListTaskQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTaskQueuePathParams;
    queryParams: ListTaskQueueQueryParams;
    security: ListTaskQueueSecurity;
}
export declare class ListTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    listTaskQueueResponse?: ListTaskQueueListTaskQueueResponse;
    statusCode: number;
}
