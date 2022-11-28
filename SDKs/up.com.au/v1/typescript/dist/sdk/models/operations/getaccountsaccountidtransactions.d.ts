import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdTransactionsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdTransactionsQueryParams extends SpeakeasyBase {
    filterCategory?: string;
    filterSince?: Date;
    filterStatus?: any;
    filterTag?: string;
    filterUntil?: Date;
    pageSize?: number;
}
export declare class GetAccountsAccountIdTransactionsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdTransactionsPathParams;
    queryParams: GetAccountsAccountIdTransactionsQueryParams;
}
export declare class GetAccountsAccountIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    listTransactionsResponse?: shared.ListTransactionsResponse;
    statusCode: number;
}
