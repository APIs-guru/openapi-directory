import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdTransactionAccountsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdTransactionAccountsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdTransactionAccountsPathParams;
}
export declare class GetUsersIdTransactionAccountsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transactionAccounts?: shared.TransactionAccount[];
}
