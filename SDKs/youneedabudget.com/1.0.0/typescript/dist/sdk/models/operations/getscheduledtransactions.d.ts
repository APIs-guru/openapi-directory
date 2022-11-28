import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScheduledTransactionsPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class GetScheduledTransactionsQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
}
export declare class GetScheduledTransactionsRequest extends SpeakeasyBase {
    pathParams: GetScheduledTransactionsPathParams;
    queryParams: GetScheduledTransactionsQueryParams;
}
export declare class GetScheduledTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    scheduledTransactionsResponse?: shared.ScheduledTransactionsResponse;
    statusCode: number;
}
