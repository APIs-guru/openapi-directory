import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupListResult
/** 
 * Server response for Get tenant groups API call
**/
export class GroupListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
