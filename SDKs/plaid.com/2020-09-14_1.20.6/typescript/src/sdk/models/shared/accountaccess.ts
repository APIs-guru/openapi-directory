import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountAccess
/** 
 * Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered `new_accounts`.
**/
export class AccountAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unique_id" })
  uniqueId: string;
}
