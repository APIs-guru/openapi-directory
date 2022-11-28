import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTransactionPathParams extends SpeakeasyBase {
    budgetId: string;
    transactionId: string;
}
export declare class UpdateTransactionRequest extends SpeakeasyBase {
    pathParams: UpdateTransactionPathParams;
    request: shared.SaveTransactionWrapper;
}
export declare class UpdateTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    transactionResponse?: shared.TransactionResponse;
}
