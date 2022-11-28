import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsByAccountPathParams extends SpeakeasyBase {
    accountId: string;
    budgetId: string;
}
export declare enum GetTransactionsByAccountTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}
export declare class GetTransactionsByAccountQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
    sinceDate?: Date;
    type?: GetTransactionsByAccountTypeEnum;
}
export declare class GetTransactionsByAccountRequest extends SpeakeasyBase {
    pathParams: GetTransactionsByAccountPathParams;
    queryParams: GetTransactionsByAccountQueryParams;
}
export declare class GetTransactionsByAccountResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    transactionsResponse?: shared.TransactionsResponse;
}
