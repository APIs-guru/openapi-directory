import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Area
/** 
 * Area
**/
export class Area extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
