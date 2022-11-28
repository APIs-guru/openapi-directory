import { SpeakeasyBase } from "../../../internal/utils";
import { AccountsBalanceGetRequestOptions } from "./accountsbalancegetrequestoptions";
/**
 * AccountsBalanceGetRequest defines the request schema for `/accounts/balance/get`
**/
export declare class AccountsBalanceGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    options?: AccountsBalanceGetRequestOptions;
    secret?: string;
}
