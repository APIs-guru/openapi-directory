import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentVersion
/** 
 * A component ID and version
**/
export class ComponentVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
