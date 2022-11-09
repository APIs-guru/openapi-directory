import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountsBalanceGetRequestOptions } from "./accountsbalancegetrequestoptions";


// AccountsBalanceGetRequest
/** 
 * AccountsBalanceGetRequest defines the request schema for `/accounts/balance/get`
**/
export class AccountsBalanceGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=options" })
  options?: AccountsBalanceGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
