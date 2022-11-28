import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupListResult
/** 
 * Server response for Get tenant groups API call
**/
export class GroupListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
