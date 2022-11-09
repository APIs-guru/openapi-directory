import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountsGetRequestOptions
/** 
 * An optional object to filter `/accounts/get` results.
**/
export class AccountsGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
