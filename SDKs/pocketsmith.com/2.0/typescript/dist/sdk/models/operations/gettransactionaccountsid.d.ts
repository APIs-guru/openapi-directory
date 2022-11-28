import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionAccountsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetTransactionAccountsIdRequest extends SpeakeasyBase {
    pathParams: GetTransactionAccountsIdPathParams;
}
export declare class GetTransactionAccountsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transactionAccount?: shared.TransactionAccount;
}
