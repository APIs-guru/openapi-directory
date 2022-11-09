import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// City
/** 
 * City
**/
export class City extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
