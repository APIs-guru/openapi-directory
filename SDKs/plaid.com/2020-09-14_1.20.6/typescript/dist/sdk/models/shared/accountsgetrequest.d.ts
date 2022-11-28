import { SpeakeasyBase } from "../../../internal/utils";
import { AccountsGetRequestOptions } from "./accountsgetrequestoptions";
/**
 * AccountsGetRequest defines the request schema for `/accounts/get`
**/
export declare class AccountsGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    options?: AccountsGetRequestOptions;
    secret?: string;
}
