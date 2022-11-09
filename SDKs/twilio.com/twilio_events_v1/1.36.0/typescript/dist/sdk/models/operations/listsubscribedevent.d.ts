import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSUBSCRIBEDEVENT_SERVERS: string[];
export declare class ListSubscribedEventPathParams extends SpeakeasyBase {
    subscriptionSid: string;
}
export declare class ListSubscribedEventQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSubscribedEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSubscribedEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSubscribedEventPathParams;
    queryParams: ListSubscribedEventQueryParams;
    security: ListSubscribedEventSecurity;
}
export declare class ListSubscribedEventListSubscribedEventResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSubscribedEventListSubscribedEventResponse extends SpeakeasyBase {
    meta?: ListSubscribedEventListSubscribedEventResponseMeta;
    types?: shared.EventsV1SubscriptionSubscribedEvent[];
}
export declare class ListSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    listSubscribedEventResponse?: ListSubscribedEventListSubscribedEventResponse;
    statusCode: number;
}
