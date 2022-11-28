import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class CreateSubscriptionCreateSubscriptionRequest extends SpeakeasyBase {
    description: string;
    sinkSid: string;
    types: any[];
}
export declare class CreateSubscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateSubscriptionCreateSubscriptionRequest;
    security: CreateSubscriptionSecurity;
}
export declare class CreateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1Subscription?: shared.EventsV1Subscription;
}
