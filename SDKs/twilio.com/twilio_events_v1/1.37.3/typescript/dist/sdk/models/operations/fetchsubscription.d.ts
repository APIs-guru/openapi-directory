import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class FetchSubscriptionPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSubscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSubscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSubscriptionPathParams;
    security: FetchSubscriptionSecurity;
}
export declare class FetchSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1Subscription?: shared.EventsV1Subscription;
}
