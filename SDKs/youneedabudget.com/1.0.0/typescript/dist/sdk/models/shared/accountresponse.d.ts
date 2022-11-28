import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
export declare class AccountResponseData extends SpeakeasyBase {
    account: Account;
}
export declare class AccountResponse extends SpeakeasyBase {
    data: AccountResponseData;
}
