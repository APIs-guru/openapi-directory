import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityGetRequestOptions
/** 
 * An optional object to filter `/identity/get` results.
**/
export class IdentityGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
