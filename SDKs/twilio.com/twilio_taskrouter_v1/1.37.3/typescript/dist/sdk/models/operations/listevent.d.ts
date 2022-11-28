import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListEventServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListEventPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class ListEventQueryParams extends SpeakeasyBase {
    endDate?: Date;
    eventType?: string;
    minutes?: number;
    pageSize?: number;
    reservationSid?: string;
    sid?: string;
    startDate?: Date;
    taskChannel?: string;
    taskQueueSid?: string;
    taskSid?: string;
    workerSid?: string;
    workflowSid?: string;
}
export declare class ListEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEventListEventResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEventListEventResponse extends SpeakeasyBase {
    events?: shared.TaskrouterV1WorkspaceEvent[];
    meta?: ListEventListEventResponseMeta;
}
export declare class ListEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListEventPathParams;
    queryParams: ListEventQueryParams;
    security: ListEventSecurity;
}
export declare class ListEventResponse extends SpeakeasyBase {
    contentType: string;
    listEventResponse?: ListEventListEventResponse;
    statusCode: number;
}
