import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountsBalanceGetRequest extends SpeakeasyBase {
    request: shared.AccountsBalanceGetRequest;
}
export declare class AccountsBalanceGetResponse extends SpeakeasyBase {
    accountsGetResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
