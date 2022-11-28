import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSubscribedEventServerList: readonly ["https://events.twilio.com"];
export declare class UpdateSubscribedEventPathParams extends SpeakeasyBase {
    subscriptionSid: string;
    type: string;
}
export declare class UpdateSubscribedEventUpdateSubscribedEventRequest extends SpeakeasyBase {
    schemaVersion?: number;
}
export declare class UpdateSubscribedEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSubscribedEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSubscribedEventPathParams;
    request?: UpdateSubscribedEventUpdateSubscribedEventRequest;
    security: UpdateSubscribedEventSecurity;
}
export declare class UpdateSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
