import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class GetAccountsQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
}
export declare class GetAccountsRequest extends SpeakeasyBase {
    pathParams: GetAccountsPathParams;
    queryParams: GetAccountsQueryParams;
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    accountsResponse?: shared.AccountsResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
