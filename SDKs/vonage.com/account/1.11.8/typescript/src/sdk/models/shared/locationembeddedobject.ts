import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// LocationEmbeddedObject
/** 
 * Location object
**/
export class LocationEmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Location;
}
