import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTEVENT_SERVERS: string[];
export declare class ListEventQueryParams extends SpeakeasyBase {
    actorSid?: string;
    endDate?: Date;
    eventType?: string;
    pageSize?: number;
    resourceSid?: string;
    sourceIpAddress?: string;
    startDate?: Date;
}
export declare class ListEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListEventQueryParams;
    security: ListEventSecurity;
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
    events?: shared.MonitorV1Event[];
    meta?: ListEventListEventResponseMeta;
}
export declare class ListEventResponse extends SpeakeasyBase {
    contentType: string;
    listEventResponse?: ListEventListEventResponse;
    statusCode: number;
}
