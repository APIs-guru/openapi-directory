import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LiabilitiesGetRequestOptions
/** 
 * An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
**/
export class LiabilitiesGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
