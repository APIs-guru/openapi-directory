import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountAccess
/** 
 * Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered `new_accounts`.
**/
export class AccountAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @Metadata({ data: "json, name=unique_id" })
  uniqueId: string;
}
