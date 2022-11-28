import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class UpdateSubscriptionPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateSubscriptionUpdateSubscriptionRequest extends SpeakeasyBase {
    description?: string;
    sinkSid?: string;
}
export declare class UpdateSubscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSubscriptionPathParams;
    request?: UpdateSubscriptionUpdateSubscriptionRequest;
    security: UpdateSubscriptionSecurity;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1Subscription?: shared.EventsV1Subscription;
}
