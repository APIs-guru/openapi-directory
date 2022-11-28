import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsIdTransactionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetAccountsIdTransactionsTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
export declare class GetAccountsIdTransactionsQueryParams extends SpeakeasyBase {
    endDate?: string;
    onlyUncategorised?: number;
    page?: number;
    search?: string;
    startDate?: string;
    type?: GetAccountsIdTransactionsTypeEnum;
}
export declare class GetAccountsIdTransactionsRequest extends SpeakeasyBase {
    pathParams: GetAccountsIdTransactionsPathParams;
    queryParams: GetAccountsIdTransactionsQueryParams;
}
export declare class GetAccountsIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transactions?: shared.Transaction[];
}
