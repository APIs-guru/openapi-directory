import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTransactionsPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class UpdateTransactionsRequest extends SpeakeasyBase {
    pathParams: UpdateTransactionsPathParams;
    request: shared.UpdateTransactionsWrapper;
}
export declare class UpdateTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    saveTransactionsResponse?: shared.SaveTransactionsResponse;
    statusCode: number;
}
