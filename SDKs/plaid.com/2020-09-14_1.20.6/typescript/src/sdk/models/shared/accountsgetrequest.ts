import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountsGetRequestOptions } from "./accountsgetrequestoptions";



// AccountsGetRequest
/** 
 * AccountsGetRequest defines the request schema for `/accounts/get`
**/
export class AccountsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: AccountsGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
