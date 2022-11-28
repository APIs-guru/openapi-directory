import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransactionAccountsIdTransactionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostTransactionAccountsIdTransactionsRequestBody extends SpeakeasyBase {
    amount: number;
    categoryId?: number;
    chequeNumber?: string;
    date: string;
    isTransfer?: boolean;
    labels?: string;
    memo?: string;
    note?: string;
    payee: string;
}
export declare class PostTransactionAccountsIdTransactionsRequest extends SpeakeasyBase {
    pathParams: PostTransactionAccountsIdTransactionsPathParams;
    request?: PostTransactionAccountsIdTransactionsRequestBody;
}
export declare class PostTransactionAccountsIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transaction?: shared.Transaction;
}
