import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsByPayeePathParams extends SpeakeasyBase {
    budgetId: string;
    payeeId: string;
}
export declare enum GetTransactionsByPayeeTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}
export declare class GetTransactionsByPayeeQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
    sinceDate?: Date;
    type?: GetTransactionsByPayeeTypeEnum;
}
export declare class GetTransactionsByPayeeRequest extends SpeakeasyBase {
    pathParams: GetTransactionsByPayeePathParams;
    queryParams: GetTransactionsByPayeeQueryParams;
}
export declare class GetTransactionsByPayeeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    hybridTransactionsResponse?: shared.HybridTransactionsResponse;
    statusCode: number;
}
