import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportTransactionsPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class ImportTransactionsRequest extends SpeakeasyBase {
    pathParams: ImportTransactionsPathParams;
}
export declare class ImportTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    transactionsImportResponse?: shared.TransactionsImportResponse;
}
