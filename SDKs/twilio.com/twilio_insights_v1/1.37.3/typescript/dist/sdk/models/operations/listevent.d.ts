import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListEventServerList: readonly ["https://insights.twilio.com"];
export declare class ListEventPathParams extends SpeakeasyBase {
    callSid: string;
}
export declare class ListEventQueryParams extends SpeakeasyBase {
    edge?: shared.EventEnumTwilioEdgeEnum;
    pageSize?: number;
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
    events?: shared.InsightsV1CallEvent[];
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
