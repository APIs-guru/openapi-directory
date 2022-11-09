import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationListResult
/** 
 * Application list operation result.
**/
export class ApplicationListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
