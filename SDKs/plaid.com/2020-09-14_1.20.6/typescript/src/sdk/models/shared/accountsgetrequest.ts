import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountsGetRequestOptions } from "./accountsgetrequestoptions";


// AccountsGetRequest
/** 
 * AccountsGetRequest defines the request schema for `/accounts/get`
**/
export class AccountsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=options" })
  options?: AccountsGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
