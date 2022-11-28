import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTransactionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutTransactionsIdQueryParams extends SpeakeasyBase {
    labels?: string;
}
export declare class PutTransactionsIdRequestBody extends SpeakeasyBase {
    amount?: number;
    categoryId?: number;
    chequeNumber?: string;
    date?: string;
    isTransfer?: boolean;
    memo?: string;
    note?: string;
    payee?: string;
}
export declare class PutTransactionsIdRequest extends SpeakeasyBase {
    pathParams: PutTransactionsIdPathParams;
    queryParams: PutTransactionsIdQueryParams;
    request?: PutTransactionsIdRequestBody;
}
export declare class PutTransactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transaction?: shared.Transaction;
}
