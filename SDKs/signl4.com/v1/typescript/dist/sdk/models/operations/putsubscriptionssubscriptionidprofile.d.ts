import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSubscriptionsSubscriptionIdProfilePathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class PutSubscriptionsSubscriptionIdProfileRequests extends SpeakeasyBase {
    subscriptionProfile?: shared.SubscriptionProfile;
    subscriptionProfile1?: shared.SubscriptionProfile;
    subscriptionProfile2?: shared.SubscriptionProfile;
    subscriptionProfile3?: shared.SubscriptionProfile;
}
export declare class PutSubscriptionsSubscriptionIdProfileRequest extends SpeakeasyBase {
    pathParams: PutSubscriptionsSubscriptionIdProfilePathParams;
    request?: PutSubscriptionsSubscriptionIdProfileRequests;
}
export declare class PutSubscriptionsSubscriptionIdProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    subscriptionInfo?: shared.SubscriptionInfo;
}
