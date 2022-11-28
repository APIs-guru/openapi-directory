import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTransactionAccountsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutTransactionAccountsIdRequestBody extends SpeakeasyBase {
    institutionId?: number;
}
export declare class PutTransactionAccountsIdRequest extends SpeakeasyBase {
    pathParams: PutTransactionAccountsIdPathParams;
    request?: PutTransactionAccountsIdRequestBody;
}
export declare class PutTransactionAccountsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transactionAccount?: shared.TransactionAccount;
}
