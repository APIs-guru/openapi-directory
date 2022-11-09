import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainListResult
/** 
 * Server response for Get tenant domains API call.
**/
export class DomainListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
