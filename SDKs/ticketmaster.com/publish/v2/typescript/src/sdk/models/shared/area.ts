import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Area
/** 
 * Area
**/
export class Area extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
