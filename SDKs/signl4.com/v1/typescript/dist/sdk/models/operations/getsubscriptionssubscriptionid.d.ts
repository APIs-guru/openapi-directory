import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsSubscriptionIdPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetSubscriptionsSubscriptionIdRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsSubscriptionIdPathParams;
}
export declare class GetSubscriptionsSubscriptionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    subscriptionInfo?: shared.SubscriptionInfo;
}
