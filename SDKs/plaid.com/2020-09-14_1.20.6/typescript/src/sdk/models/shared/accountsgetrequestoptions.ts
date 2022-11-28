import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountsGetRequestOptions
/** 
 * An optional object to filter `/accounts/get` results.
**/
export class AccountsGetRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
