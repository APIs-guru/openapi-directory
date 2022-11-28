import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComponentVersion
/** 
 * A component ID and version
**/
export class ComponentVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
