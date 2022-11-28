import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare enum GetTransactionsTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}
export declare class GetTransactionsQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
    sinceDate?: Date;
    type?: GetTransactionsTypeEnum;
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    pathParams: GetTransactionsPathParams;
    queryParams: GetTransactionsQueryParams;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    transactionsResponse?: shared.TransactionsResponse;
}
