import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationListResult
/** 
 * Application list operation result.
**/
export class ApplicationListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
