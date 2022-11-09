import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// LocationEmbeddedObject
/** 
 * Location object
**/
export class LocationEmbeddedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Location;
}
