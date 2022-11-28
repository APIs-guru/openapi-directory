import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdTransactionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetUsersIdTransactionsTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
export declare class GetUsersIdTransactionsQueryParams extends SpeakeasyBase {
    endDate?: string;
    onlyUncategorised?: number;
    page?: number;
    search?: string;
    startDate?: string;
    type?: GetUsersIdTransactionsTypeEnum;
}
export declare class GetUsersIdTransactionsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdTransactionsPathParams;
    queryParams: GetUsersIdTransactionsQueryParams;
}
export declare class GetUsersIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transactions?: shared.Transaction[];
}
