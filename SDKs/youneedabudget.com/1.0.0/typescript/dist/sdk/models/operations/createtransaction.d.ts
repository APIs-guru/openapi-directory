import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTransactionPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class CreateTransactionRequest extends SpeakeasyBase {
    pathParams: CreateTransactionPathParams;
    request: shared.SaveTransactionsWrapper;
}
export declare class CreateTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    saveTransactionsResponse?: shared.SaveTransactionsResponse;
    statusCode: number;
}
