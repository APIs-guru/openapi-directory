import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionAccountsIdTransactionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetTransactionAccountsIdTransactionsTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
export declare class GetTransactionAccountsIdTransactionsQueryParams extends SpeakeasyBase {
    endDate?: string;
    onlyUncategorised?: number;
    page?: number;
    search?: string;
    startDate?: string;
    type?: GetTransactionAccountsIdTransactionsTypeEnum;
}
export declare class GetTransactionAccountsIdTransactionsRequest extends SpeakeasyBase {
    pathParams: GetTransactionAccountsIdTransactionsPathParams;
    queryParams: GetTransactionAccountsIdTransactionsQueryParams;
}
export declare class GetTransactionAccountsIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transactions?: shared.Transaction[];
}
