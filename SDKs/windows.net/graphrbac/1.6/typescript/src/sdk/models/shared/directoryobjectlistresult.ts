import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryObjectListResult
/** 
 * DirectoryObject list operation result.
**/
export class DirectoryObjectListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
