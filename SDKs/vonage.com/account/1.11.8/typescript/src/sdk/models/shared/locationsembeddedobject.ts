import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Location } from "./location";


// LocationsEmbeddedObject
/** 
 * Collection of location objects
**/
export class LocationsEmbeddedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Location })
  data?: Location[];
}
