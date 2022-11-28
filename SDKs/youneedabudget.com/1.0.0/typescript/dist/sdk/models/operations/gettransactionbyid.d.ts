import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionByIdPathParams extends SpeakeasyBase {
    budgetId: string;
    transactionId: string;
}
export declare class GetTransactionByIdRequest extends SpeakeasyBase {
    pathParams: GetTransactionByIdPathParams;
}
export declare class GetTransactionByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    transactionResponse?: shared.TransactionResponse;
}
