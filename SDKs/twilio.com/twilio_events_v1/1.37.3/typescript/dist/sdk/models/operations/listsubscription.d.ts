import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class ListSubscriptionQueryParams extends SpeakeasyBase {
    pageSize?: number;
    sinkSid?: string;
}
export declare class ListSubscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSubscriptionListSubscriptionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSubscriptionListSubscriptionResponse extends SpeakeasyBase {
    meta?: ListSubscriptionListSubscriptionResponseMeta;
    subscriptions?: shared.EventsV1Subscription[];
}
export declare class ListSubscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSubscriptionQueryParams;
    security: ListSubscriptionSecurity;
}
export declare class ListSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    listSubscriptionResponse?: ListSubscriptionListSubscriptionResponse;
    statusCode: number;
}
