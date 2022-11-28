import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BulkCreateTransactionsPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class BulkCreateTransactionsRequest extends SpeakeasyBase {
    pathParams: BulkCreateTransactionsPathParams;
    request: shared.BulkTransactions;
}
export declare class BulkCreateTransactionsResponse extends SpeakeasyBase {
    bulkResponse?: shared.BulkResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
