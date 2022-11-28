import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// LocationsEmbeddedObject
/** 
 * Collection of location objects
**/
export class LocationsEmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Location })
  data?: Location[];
}
