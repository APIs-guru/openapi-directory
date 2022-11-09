import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An optional object to filter `/accounts/balance/get` results.
**/
export declare class AccountsBalanceGetRequestOptions extends SpeakeasyBase {
    accountIds?: string[];
    minLastUpdatedDatetime?: Date;
}
