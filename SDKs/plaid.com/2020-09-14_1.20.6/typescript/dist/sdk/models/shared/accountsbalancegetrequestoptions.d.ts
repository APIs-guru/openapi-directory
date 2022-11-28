import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter `/accounts/balance/get` results.
**/
export declare class AccountsBalanceGetRequestOptions extends SpeakeasyBase {
    accountIds?: string[];
    minLastUpdatedDatetime?: Date;
}
