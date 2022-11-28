import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsQueryParams extends SpeakeasyBase {
    filterCategory?: string;
    filterSince?: Date;
    filterStatus?: any;
    filterTag?: string;
    filterUntil?: Date;
    pageSize?: number;
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    queryParams: GetTransactionsQueryParams;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    listTransactionsResponse?: shared.ListTransactionsResponse;
    statusCode: number;
}
