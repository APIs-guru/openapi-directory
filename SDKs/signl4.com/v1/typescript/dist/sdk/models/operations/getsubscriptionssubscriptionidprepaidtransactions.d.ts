import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsSubscriptionIdPrepaidTransactionsPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetSubscriptionsSubscriptionIdPrepaidTransactionsRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsSubscriptionIdPrepaidTransactionsPathParams;
}
export declare class GetSubscriptionsSubscriptionIdPrepaidTransactionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    prepaidTransactionInfos?: shared.PrepaidTransactionInfo[];
    statusCode: number;
}
