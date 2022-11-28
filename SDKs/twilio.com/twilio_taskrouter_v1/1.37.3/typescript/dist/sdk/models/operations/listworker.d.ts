import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListWorkerPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class ListWorkerQueryParams extends SpeakeasyBase {
    activityName?: string;
    activitySid?: string;
    available?: string;
    friendlyName?: string;
    ordering?: string;
    pageSize?: number;
    targetWorkersExpression?: string;
    taskQueueName?: string;
    taskQueueSid?: string;
}
export declare class ListWorkerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWorkerListWorkerResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWorkerListWorkerResponse extends SpeakeasyBase {
    meta?: ListWorkerListWorkerResponseMeta;
    workers?: shared.TaskrouterV1WorkspaceWorker[];
}
export declare class ListWorkerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListWorkerPathParams;
    queryParams: ListWorkerQueryParams;
    security: ListWorkerSecurity;
}
export declare class ListWorkerResponse extends SpeakeasyBase {
    contentType: string;
    listWorkerResponse?: ListWorkerListWorkerResponse;
    statusCode: number;
}
