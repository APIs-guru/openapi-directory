import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTEVENTTYPE_SERVERS: string[];
export declare class ListEventTypeQueryParams extends SpeakeasyBase {
    pageSize?: number;
    schemaId?: string;
}
export declare class ListEventTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEventTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListEventTypeQueryParams;
    security: ListEventTypeSecurity;
}
export declare class ListEventTypeListEventTypeResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEventTypeListEventTypeResponse extends SpeakeasyBase {
    meta?: ListEventTypeListEventTypeResponseMeta;
    types?: shared.EventsV1EventType[];
}
export declare class ListEventTypeResponse extends SpeakeasyBase {
    contentType: string;
    listEventTypeResponse?: ListEventTypeListEventTypeResponse;
    statusCode: number;
}
