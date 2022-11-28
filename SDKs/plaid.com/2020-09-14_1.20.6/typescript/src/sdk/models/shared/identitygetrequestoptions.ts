import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityGetRequestOptions
/** 
 * An optional object to filter `/identity/get` results.
**/
export class IdentityGetRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
