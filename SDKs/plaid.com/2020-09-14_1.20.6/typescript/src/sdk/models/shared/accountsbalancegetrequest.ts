import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountsBalanceGetRequestOptions } from "./accountsbalancegetrequestoptions";



// AccountsBalanceGetRequest
/** 
 * AccountsBalanceGetRequest defines the request schema for `/accounts/balance/get`
**/
export class AccountsBalanceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: AccountsBalanceGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
