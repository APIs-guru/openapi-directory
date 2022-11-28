import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// City
/** 
 * City
**/
export class City extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
