import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsByCategoryPathParams extends SpeakeasyBase {
    budgetId: string;
    categoryId: string;
}
export declare enum GetTransactionsByCategoryTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}
export declare class GetTransactionsByCategoryQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
    sinceDate?: Date;
    type?: GetTransactionsByCategoryTypeEnum;
}
export declare class GetTransactionsByCategoryRequest extends SpeakeasyBase {
    pathParams: GetTransactionsByCategoryPathParams;
    queryParams: GetTransactionsByCategoryQueryParams;
}
export declare class GetTransactionsByCategoryResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    hybridTransactionsResponse?: shared.HybridTransactionsResponse;
    statusCode: number;
}
