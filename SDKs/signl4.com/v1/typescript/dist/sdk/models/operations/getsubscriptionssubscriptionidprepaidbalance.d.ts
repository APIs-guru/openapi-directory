import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsSubscriptionIdPrepaidBalancePathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetSubscriptionsSubscriptionIdPrepaidBalanceRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsSubscriptionIdPrepaidBalancePathParams;
}
export declare class GetSubscriptionsSubscriptionIdPrepaidBalanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    prepaidBalanceInfo?: shared.PrepaidBalanceInfo;
    statusCode: number;
}
