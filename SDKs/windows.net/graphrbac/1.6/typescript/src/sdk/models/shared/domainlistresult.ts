import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainListResult
/** 
 * Server response for Get tenant domains API call.
**/
export class DomainListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
