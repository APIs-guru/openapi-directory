import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryObjectListResult
/** 
 * DirectoryObject list operation result.
**/
export class DirectoryObjectListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
