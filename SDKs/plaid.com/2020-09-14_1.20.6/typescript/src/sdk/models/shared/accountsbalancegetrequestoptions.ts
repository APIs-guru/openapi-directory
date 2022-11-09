import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountsBalanceGetRequestOptions
/** 
 * An optional object to filter `/accounts/balance/get` results.
**/
export class AccountsBalanceGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids" })
  accountIds?: string[];

  @Metadata({ data: "json, name=min_last_updated_datetime" })
  minLastUpdatedDatetime?: Date;
}
