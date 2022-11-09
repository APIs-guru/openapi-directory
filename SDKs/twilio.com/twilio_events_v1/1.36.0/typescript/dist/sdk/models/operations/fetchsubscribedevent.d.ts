import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSUBSCRIBEDEVENT_SERVERS: string[];
export declare class FetchSubscribedEventPathParams extends SpeakeasyBase {
    subscriptionSid: string;
    type: string;
}
export declare class FetchSubscribedEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSubscribedEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSubscribedEventPathParams;
    security: FetchSubscribedEventSecurity;
}
export declare class FetchSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
