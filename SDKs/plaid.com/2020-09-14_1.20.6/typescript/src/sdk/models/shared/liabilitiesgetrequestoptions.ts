import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LiabilitiesGetRequestOptions
/** 
 * An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
**/
export class LiabilitiesGetRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
