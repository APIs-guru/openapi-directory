import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
export declare class AccountsResponseData extends SpeakeasyBase {
    accounts: Account[];
    serverKnowledge: number;
}
export declare class AccountsResponse extends SpeakeasyBase {
    data: AccountsResponseData;
}
