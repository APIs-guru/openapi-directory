import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESUBSCRIBEDEVENT_SERVERS: string[];
export declare class CreateSubscribedEventPathParams extends SpeakeasyBase {
    subscriptionSid: string;
}
export declare class CreateSubscribedEventCreateSubscribedEventRequest extends SpeakeasyBase {
    schemaVersion?: number;
    type: string;
}
export declare class CreateSubscribedEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSubscribedEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSubscribedEventPathParams;
    request?: CreateSubscribedEventCreateSubscribedEventRequest;
    security: CreateSubscribedEventSecurity;
}
export declare class CreateSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
