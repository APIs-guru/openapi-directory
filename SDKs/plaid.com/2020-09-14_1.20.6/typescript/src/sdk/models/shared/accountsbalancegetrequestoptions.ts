import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountsBalanceGetRequestOptions
/** 
 * An optional object to filter `/accounts/balance/get` results.
**/
export class AccountsBalanceGetRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ids" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=min_last_updated_datetime" })
  minLastUpdatedDatetime?: Date;
}
